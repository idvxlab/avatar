
import React, { useRef } from 'react';
const CameraComponent = () => {

 const cameraVideoRef = useRef(null);
 const cameraCanvasRef = useRef(null);

  function successFunc(mediaStream) {
    const video = cameraVideoRef.current;
    // const video = document.getElementById('cameraVideo') as HTMLVideoElement;
    // 旧的浏览器可能没有srcObject
    if ('srcObject' in video) {
      video.srcObject = mediaStream;
    }
    video.onloadedmetadata = () => {
      video.play();
    };
  }

  function errorFunc(err) {
    console.log(`${err.name}: ${err.message}`);
    // always check for errors at the end.
  }
    // 启动摄像头
  const openMedia = () => { // 打开摄像头
    const opt = {
      audio: false,
      video: {
        width: 1280,
        height: 720
      }
    };
    navigator.mediaDevices.getUserMedia(opt).then(successFunc).catch(errorFunc);
  };
  // 关闭摄像头
  const closeMedia = () => {
    // const video = document.getElementById('cameraVideo') as HTMLVideoElement;
    const video = cameraVideoRef.current;
    const stream = video.srcObject;
    if ('getTracks' in stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    }
  };

return(
 <div>
   <video
     id="cameraVideo"
     ref={cameraVideoRef}
     style={{
       width: '1280px', height: '720px'
     }}
    />
    <canvas
      id="cameraCanvas"
      ref={cameraCanvasRef}
      width={1280}
      height={720}
      style={{
        width: '1280px', height: '720px'
      }}
    />
    <button onClick={openMedia} >打开摄像头</button>
    <button onClick={saveImg} >保存</button>
    <button onClick={closeMedia} >关闭摄像头</button>
 </div>
)
}

const getImg = () => {
    // const video = document.getElementById('cameraVideo') as HTMLVideoElement;
    // const canvas = document.getElementById('cameraCanvas') as HTMLCanvasElement;
    const video = cameraVideoRef.current;
    const canvas = cameraCanvasRef.current;
    if (canvas == null) {
      return;
    }
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight); // 把视频中的一帧在canvas画布里面绘制出来
    const imgStr = canvas.toDataURL(); // 将图片资源转成字符串
    const base64Img = imgStr.split(';base64,').pop(); // 将图片资源转成base64格式
    const imgData = {
      base64Img
    };
    closeMedia(); // 获取到图片之后可以自动关闭摄像头
    return imgData;
  };


  const saveImg = () => { // electron项目保存到本地
    const data = getImg();
    document.getElementById('imgTag').src = data.base64Img
  };
  
//https://blog.csdn.net/qq_43399210/article/details/124168383