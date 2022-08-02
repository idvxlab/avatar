import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'
import './uploadbroad.css'
import { $ } from "jquery";

export default class UploadBroad extends Component {
    constructor(props){
        super(props)
        this.state={pic:this.props.pic,progress:0}
        this.uploadImg=this.uploadImg.bind(this)
        this.load=this.load.bind(this)
        this.reload=this.reload.bind(this)
        this.show=this.show.bind(this)
        this.generate=this.generate.bind(this)
        this.takephoto=this.takephoto.bind(this)
        this.takePhoto=this.takePhoto.bind(this)
        this.getMedia=this.getMedia.bind(this)
        this.getPhoto=this.getPhoto.bind(this)
    }
        
    uploadImg(pi){
        this.setState({pic:pi});
    }
    show(){if(this.state.pic){}var img=document.querySelector('input[type=file]').files[0];
    this.uploadImg(img);}
    load(){if(!this.state.pic){document.getElementById('Imgload').click()}}
    takephoto(){this.setState({takephotomode:1})}
    //reload(){if(this.state.pic){document.getElementById('Imgload').click()}}
    reload(){this.setState({pic:0,takephotomode:0});this.uploadImg(0);}
    generate(){{this.props.transpic(this.state.pic);}
        
    }
    static getDerivedStateFromProps(props, state) {
        return {pic:props.pic,sss:props.sss};
      }
    takePhoto(){}
    getMedia() {

        {
            function getUserMedia(constraints, success, error){
                if (navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
                } else if (navigator.webkitGetUserMedia) {
                    navigator.webkitGetUserMedia(constraints, success, error)
                } else if (navigator.mozGetUserMedia) {
                    navigator.mozGetUserMedia(constraints, success, error);
                } else if (navigator.getUserMedia) {
                    navigator.getUserMedia(constraints, success, error);
                }
            }
            let video = document.getElementById('video');
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            function success(stream) {//兼容webkit核心浏览器//let CompatibleURL = window.URL || window.webkitURL;//将视频流设置为video元素的源// console.log(stream);//video.src = CompatibleURL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();}
            function error(error) {
            console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);}
            if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
                if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
                    console.log("enumerateDevices() not supported.");
                    //返回
                    return;
                        }
                        // 列出摄像头和麦克风
                        var exArray = [];
                        navigator.mediaDevices.enumerateDevices()
                            .then(function (devices) {
                                devices.forEach(function (device) {
                                    if (device.kind == "videoinput") {
                                        exArray.push(device.deviceId);
                                    }
                                });
                                var mediaOpts = { video: {width: 269, height: 340},
                                audio: false};

                                //调用用户媒体设备, 访问摄像头
                                getUserMedia(mediaOpts, success, error);
                            })
                            .catch(function (err) {
                                console.log(err.name + ": " + err.message);
                            });
                    } else {
                        alert('不支持访问用户媒体');
                    }
                    /*
                                        
                    */
        }


        /*
        let constraints = {
            //参数
            video: {width: 269, height: 340},
            audio: false
        };
        //获得video摄像头区域
        let video = document.getElementById("video");
        //返回的Promise对象
        let promise = navigator.mediaDevices.getUserMedia(constraints);
       //then()异步，调用MediaStream对象作为参数
        promise.then(function (MediaStream) {
            video.srcObject = MediaStream;
            video.play();
        });*/
    }
    getPhoto(){
  
                     var canvas=document.getElementById('canvas')
                    let context = canvas.getContext('2d');
                    let video = document.getElementById('video');
                        context.drawImage(video, 0, 0, 269,340);
                       //var image_data = context.getImageData(0, 0, 480, 320);
                        // var string = OCRAD(image_data.data);
                        // string = _arrayBufferToBase64(image_data);
                        var image = new Image();
                        image.src = canvas.toDataURL("image/jpeg");
                        console.log(this.state.pic)
                        this.setState({pic:image.src})

                    
    }
    //269  340
render(){
    if(!this.state.pic){
        if(this.state.takephotomode){
            console.log(1)
           return (
                
                <div>
                <div className='AvatarPhotoName'>Upload your selfie</div>
                <div className='photoBroad'>

                <div id="contentHolder">   
                <div onClick={this.getMedia}>开启摄像头</div>
                < video   style={{position:'absolute',left:85,top:35}}  id="video" width="269px" height="340px" autoPlay="autoplay" onLoad={()=>{}}></video>
                        

                        <canvas style={{ position:'absolute',left:85,top:35}} id="canvas" width="500px" height="500px"></canvas>
                        <button id="snap" onClick={(this.getPhoto)}>拍照</button>
                </div>
                <input type='file' id='Imgload' onChange={this.show}></input>
                </div>
                <div className='reloadButton' onClick={this.reload}><div className='reloadButtonText'>reload</div></div>
                <div className='generateButton' ><div className='generateButtonText'>generate</div></div>            
                </div>
               
            )
        }
        else{console.log(2)
            return (
                <div>
                <div className='AvatarPhotoName'>Upload your selfie</div>
                <div className='photoBroad'>
                <div className='photoBroadEmpty'>
                <div className='photoBroadEmptyC' onClick={this.takephoto}><div className='photoBroadEmptyCT'>Take photo</div></div>
                <div className='photoBroadEmptyL' onClick={this.load}><div className='photoBroadEmptyLT'>Choose from file</div></div>
                <svg  width="70" height="70" transform='translate(75,0)' fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M69.848 38.264V31.736H38.264V0.151997H31.64V31.736H0.0560007V38.264H31.64V69.848H38.264V38.264H69.848Z" fill="#929292"/></svg>
                </div>
                <input type='file' id='Imgload' onChange={this.show}></input>
                </div>
                <div className='reloadButton' onClick={this.reload}><div className='reloadButtonText'>reload</div></div>
                <div className='generateButton' ><div className='generateButtonText'>generate</div></div>            
                </div>
               
            )
        }
        
    }
    else{console.log(3)
        return (
            <div>
                <div className='AvatarPhotoName'>Upload your selfie</div>
            <div className='photoBroad'>
            <img src={window.URL.createObjectURL(this.state.pic) } className='realPhoto' width={269+'px'} height={340+'px'}/>
            </div>
            <input type='file' id='Imgload' onChange={this.show}></input>
            <div className='reloadButton' onClick={this.reload}><div className='reloadButtonText'>reload</div></div>
            <div className='generateButton' onClick={()=>{this.generate()}} ><div className='generateButtonText'>generate</div></div>                
            </div>)
    }
}}