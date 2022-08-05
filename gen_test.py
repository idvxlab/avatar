from svgutils.compose import *
import cairosvg
import os
from io import BytesIO
import clip
from PIL import Image
import math
import random
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
from collections import namedtuple, deque
from IPython import display

import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
import torchvision.transforms as T

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

IMAGE_SIZE = 224

def get_filelist(dirpath,Filelist=[]):
   
    newDir = dirpath
    if os.path.isfile(dirpath):
        Filelist.append(dirpath)
    elif os.path.isdir(dirpath):
        for s in os.listdir(dirpath):
            
            newDir=os.path.join(dirpath,s)
            if os.path.isfile(newDir) and s[0]!='.':
                get_filelist(newDir, Filelist)
    return Filelist

file_face=get_filelist('./OpenPeeps/face',[])
file_head=get_filelist('./OpenPeeps/head',[])
file_face_hair=get_filelist('./OpenPeeps/facialhair',[])
file_hat=get_filelist('./OpenPeeps/hat',[])
file_accessories=get_filelist('./OpenPeeps/accessories',[])

def conv3x3(in_planes, out_planes, stride=1):
    return (nn.Conv2d(in_planes, out_planes, kernel_size=3, stride=stride, padding=1, bias=False))

class BasicBlock(nn.Module):
    expansion = 1

    def __init__(self, in_planes, planes, stride=1):
        super(BasicBlock, self).__init__()
        self.conv1 = conv3x3(in_planes, planes, stride)
        self.bn1 = nn.BatchNorm2d(planes)
        self.conv2 = conv3x3(planes, planes)
        self.bn2 = nn.BatchNorm2d(planes)

        self.shortcut = nn.Sequential()
        if stride != 1 or in_planes != self.expansion * planes:
            self.shortcut = nn.Sequential(
                (nn.Conv2d(in_planes, self.expansion*planes, kernel_size=1, stride=stride, bias=False)),
                nn.BatchNorm2d(self.expansion*planes)
            )

    def forward(self, x):
        out = F.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))
        out += self.shortcut(x)
        out = F.relu(out)

        return out

class ResNet(nn.Module):
    def __init__(self, num_inputs, num_outputs):
        super(ResNet, self).__init__()
        self.in_planes = 64

        block, num_blocks = (BasicBlock, [2,2,2,2])

        self.conv1 = conv3x3(num_inputs, 64, 2)
        self.bn1 = nn.BatchNorm2d(64)
        self.layer1 = self._make_layer(block, 64, num_blocks[0], stride=2)
        self.layer2 = self._make_layer(block, 128, num_blocks[1], stride=2)
        self.layer3 = self._make_layer(block, 256, num_blocks[2], stride=2)
        self.layer4 = self._make_layer(block, 512, num_blocks[3], stride=2)
        self.fc = nn.Linear(8192 * block.expansion, num_outputs)

    def _make_layer(self, block, planes, num_blocks, stride):
        strides = [stride] + [1]*(num_blocks-1)
        layers = []

        for stride in strides:
            layers.append(block(self.in_planes, planes, stride))
            self.in_planes = planes * block.expansion

        return nn.Sequential(*layers)

    def forward(self, x):
        x = F.relu(self.bn1(self.conv1(x)))
        x = self.layer1(x)
        x = self.layer2(x)
        x = self.layer3(x)
        x = self.layer4(x)
        x = F.avg_pool2d(x, 1)
        x = x.view(x.size(0), -1)
        x = self.fc(x)
        x = torch.sigmoid(x)
        return x

class Paint:
      def __init__(self, batch_size = 64, max_step = 100):
          self.batch_size = batch_size
          self.max_step = max_step
          self.action_space = len(file_face) + len(file_head) + len(file_face_hair) + len(file_hat) + len(file_accessories)
          self.test = True
          self.canvas = torch.zeros([self.batch_size, 3, IMAGE_SIZE, IMAGE_SIZE], dtype=torch.uint8).to(device)
          self.svg = None
          self.last_similarity = None
          self.clip_model, self.preprocess = clip.load("ViT-B/32", device=device)
          self.clip_model = self.clip_model.eval()
          self.cos = nn.CosineSimilarity(dim=1, eps=1e-6).to(device)

      def reset(self, test=True, test_data=[]):
          self.test = test
          self.stepnum = 0
          self.target_img = torch.zeros([self.batch_size, 3, IMAGE_SIZE, IMAGE_SIZE]).to(device)
          self.canvas = torch.zeros([self.batch_size, 3, IMAGE_SIZE, IMAGE_SIZE]).to(device)
          self.item_index = torch.zeros([self.batch_size, 5], dtype=torch.uint8)
          for i in range(self.batch_size):
              canva, self.item_index[i] = self.reset_canvas()
              self.canvas[i] = self.preprocess(canva).unsqueeze(0).to(device)
              target = self.preprocess(test_data[i]).unsqueeze(0).to(device)
              self.target_img[i] = target
          self.canvas = self.clip_model.encode_image(self.canvas).to(torch.float32)
          self.target_img = self.clip_model.encode_image(self.target_img).to(torch.float32)
          return self.observation()

      def observation(self):
          return torch.cat((self.canvas.reshape((self.batch_size, 1, 512)), self.target_img.reshape((self.batch_size, 1, 512))), 1).to(device) # canvas, img

      def step(self, action):
          self.stepnum += 1
          self.change_item(action)
          ob = self.observation()
          done = (self.stepnum == self.max_step)
          if self.test:
            reward = None
          else:
            reward = self.computing_reward()
          return ob.detach(), reward, np.array([done] * self.batch_size), None

      def reset_canvas(self):
          face_index = random.randint(0, len(file_face) - 1)
          head_index = random.randint(0, len(file_head) - 1)
          facehair_index = random.randint(0, len(file_face_hair) - 1)
          hat_index = random.randint(0, len(file_hat) - 1)
          accessories_index = random.randint(0, len(file_accessories) - 1)
          #action = [face_index, head_index, facehair_index, hat_index, accessories_index]
          node = [file_face[face_index], file_head[head_index], file_face_hair[facehair_index], file_hat[hat_index], file_accessories[accessories_index]]
          
          return self.generate_img(node), torch.tensor([face_index, head_index, facehair_index, hat_index, accessories_index])

      def generate_img(self, node):
          faceimg=SVG(node[0])
          headimg=SVG(node[1])
          facehairimg=SVG(node[2])
          hatimg=SVG(node[3])
          accimg=SVG(node[4])
          base_size=567
          img=Figure(str(base_size*1.4)+'px',str(base_size*1.4)+'px',
                    Panel(headimg).scale(1),
                    Panel(faceimg).scale(1),
                    Panel(facehairimg).scale(1),    
                    Panel(hatimg).scale(1),
                    Panel(accimg).scale(1)
                    )
          self.svg = img
          png_bytes = cairosvg.svg2png(img.tostr())
          png = Image.open(BytesIO(png_bytes))
          return png

      def change_item(self, action):
          index_length = (len(file_face), len(file_face) + len(file_head), len(file_face) + len(file_head) + len(file_face_hair), len(file_face) + len(file_head) + len(file_face_hair) + len(file_hat), len(file_face) + len(file_head) + len(file_face_hair) + len(file_hat) + len(file_accessories))
          self.canvas = torch.zeros([self.batch_size, 3, IMAGE_SIZE, IMAGE_SIZE]).to(device)
          for i in range(self.batch_size):
              node = [file_face[self.item_index[i][0]], file_head[self.item_index[i][1]], file_face_hair[self.item_index[i][2]], file_hat[self.item_index[i][3]], file_accessories[self.item_index[i][4]]]
              if(action[i] < index_length[0]):
                face_index = action[i]
                self.item_index[i][0] = face_index
                node[0] = file_face[face_index]
              elif(action[i] >= index_length[0] and action[i] < index_length[1]):
                head_index = action[i] - index_length[0]
                self.item_index[i][1] = head_index
                node[1] = file_head[head_index]
              elif(action[i] >= index_length[1] and action[i] < index_length[2]):
                facehair_index = action[i] - index_length[1]
                self.item_index[i][2] = facehair_index
                node[2] = file_face_hair[facehair_index]
              elif(action[i] >= index_length[2] and action[i] < index_length[3]):
                hat_index = action[i] - index_length[2]
                self.item_index[i][3] = hat_index
                node[3] = file_hat[hat_index]
              else:
                accessories_index = action[i] - index_length[3]
                self.item_index[i][4] = accessories_index
                node[4] = file_accessories[accessories_index]
              
              canva = self.generate_img(node)
              self.canvas[i] = self.preprocess(canva).unsqueeze(0).to(device)
          self.canvas = self.clip_model.encode_image(self.canvas).to(torch.float32)

      def computing_similarity(self):
          return self.cos(self.canvas.to(torch.float32), self.target_img.to(torch.float32))

      def computing_reward(self):
          similarity = self.computing_similarity()
          if self.test:
            return similarity
          reward = similarity - self.last_similarity
          self.last_similarity = similarity
          return reward

def select_action(state):
    with torch.no_grad():
      # pick the action with the larger expected reward.
      next_state = policy_net(state.reshape((state.shape[0], 2, 1, 512)))
      listrank = torch.sort(torch.FloatTensor(next_state.cpu()), descending = True)
      
      return listrank[1][0][0].view(next_state.shape[0], 1)

def generate_image(image, number):
  BATCH_SIZE = 1
  MAX_STEP = 20
  env = Paint(BATCH_SIZE, MAX_STEP)
  n_actions = env.action_space
  checkpoint = torch.load('./pretrained_models/model_1.pt')
  policy_net = ResNet(2, n_actions).to(device)
  policy_net.load_state_dict(checkpoint['model_state_dict'])
  policy_net.eval()
  svg_list = []
  for i in range(number):
      state = env.reset(test=True, test_data=[image])
      while(True):
          action = select_action(state)
          next_state, _, done, _ = env.step(action)
          state = next_state
          if done.all():
              svg_list.append(env.svg)
              break
  ori_image = env.preprocess(image).unsqueeze(0).to(device)
  ori_z = env.clip_model.encode_image(ori_image)
  cos = nn.CosineSimilarity(dim=1, eps=1e-6).to(device)
  coslist = []
  for svg in svg_list:
    png = cairosvg.svg2png(svg.tostr())
    target = Image.open(BytesIO(png))
    #display.display(target.resize((224, 224)))
    target_image = env.preprocess(target).unsqueeze(0).to(device)
    target_z = env.clip_model.encode_image(target_image)
    coslist.append(torch.mean(cos(ori_z.to(torch.float32), target_z.to(torch.float32))))
  listrank = torch.sort(torch.FloatTensor(coslist), descending = True)
  svg_list_rank = []
  for i in range(number):
    svg_list_rank.append(svg_list[listrank[1][i].item()])

  return svg_list_rank
