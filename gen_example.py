from PIL import Image
from IPython import display
import cairosvg
from gen_test import generate_image

image = Image.open('/content/drive/MyDrive/AIPainting/data/CelebAMask-HQ/CelebA-HQ-img/0.jpg')
number = 5
output = generate_image(image, number)
for out in output:
  png = cairosvg.svg2png(out.tostr())
  target = Image.open(BytesIO(png))
  display.display(target.resize((224, 224)))
