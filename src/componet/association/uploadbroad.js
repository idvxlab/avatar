import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'
import './uploadbroad.css'
import { $ } from "jquery";
import camera from '../../img/camera2.png'
export default class UploadBroad extends Component {
    constructor(props){
        super(props)
        this.state={pic:this.props.pic,picmode:this.props.picmode,issrc:0,}
        this.uploadImg=this.uploadImg.bind(this)
        this.load=this.load.bind(this)
        this.reload=this.reload.bind(this)
        this.show=this.show.bind(this)
        this.generate=this.generate.bind(this)
        this.takephoto=this.takephoto.bind(this)
        this.takePhoto=this.takePhoto.bind(this)
        this.getMedia=this.getMedia.bind(this)
        this.fff=0
    }
        
    uploadImg(pi,type){this.setState({pic:pi,picmode:type});}
    show(){var img=document.querySelector('input[type=file]').files[0];this.uploadImg(img,'file');}
    load(){if(!this.state.pic){document.getElementById('Imgload').click()}}
    takephoto(){this.setState({takephotomode:1})}
    //reload(){if(this.state.pic){document.getElementById('Imgload').click()}}
    reload(){this.setState({pic:0,takephotomode:0,picmode:0});this.uploadImg(0,0);}
    generate(){
       
        {this.props.transpic(this.state.pic,this.state.picmode);}
    }
    takePhoto() {
        //获得Canvas对象
        let video = document.getElementById("video");
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, 269, 340);
        var image = new Image();
        image.src = canvas.toDataURL("image/jpeg");
        //this.setState({pic:image.src})
        this.uploadImg(image.src,'base64')
        video.srcObject.getTracks()[0].stop();
    }
    getMedia() {
        let constraints = {
            //参数
            video: {width: 269, height: 340},
            audio:false
        };
        //获得video摄像头区域
        let video = document.getElementById("video");
        //返回的Promise对象
        let promise = navigator.mediaDevices.getUserMedia(constraints);
       //then()异步，调用MediaStream对象作为参数
        promise.then(function (MediaStream) {
            video.srcObject = MediaStream;
            video.play();
        });
    }
    //269  340
    //componentDidUpdate(){this.getMedia()}
render(){

    
var src
if(this.state.pic){
    
    if(this.state.picmode==='base64'){src=this.state.pic} 
    else if(this.state.picmode==='file')
        {src=window.URL.createObjectURL(this.state.pic)} 
}

//console.log(this.state,'\n',typeof(this.state.pic),'\n\n\n',src);

    if(!this.state.pic&& this.state.takephotomode){
           return (
                
                <div>
                <div className='AvatarPhotoName'>Upload your selfie</div>
                <div className='photoBroad'>

                <div id="wideoDiv">   
                
                <video   style={{position:'absolute',left:85,top:35}}  id="video" width="269px" height="340px" autoPlay="autoplay" onLoad={()=>{}}></video>
                <canvas style={{ position:'absolute',left:85,top:35}} id="canvas" width="269px" height="340px"></canvas>
                      
                
                <img style={{ position:'absolute',left:60,top:20}} width={30} height={25} src={camera} onClick={this.getMedia}/>
                <img style={{ position:'absolute',left:335,top:20}} width={30} height={25} src={camera} onClick={this.takePhoto}/>

                </div>
                <input type='file' id='Imgload' onChange={this.show}></input>
                </div>
                <div className='reloadButton' onClick={()=>{let video = document.getElementById("video");
        if(video.srcObject){video.srcObject.getTracks()[0].stop()};this.reload()}}><div className='reloadButtonText'>reload</div></div>
                <div className='generateButton' ><div className='generateButtonText'>generate</div></div>            
                </div>
               
            )
           }
    else if(!this.state.pic&& !this.state.takephotomode){
            return (
                <div>
                <div className='AvatarPhotoName'>Upload your selfie</div>
                <div className='photoBroad'>
                <div className='photoBroadEmpty'>
                <div className='photoBroadEmptyC' onClick={()=>{this.setState({pic:0,takephotomode:1})}}><div className='photoBroadEmptyCT'>Take photo</div></div>
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
        
    
    else{
        return (
            <div>
                <div className='AvatarPhotoName'>Upload your selfie</div>
            <div className='photoBroad'>
            <img src={src} className='realPhoto' width={269+'px'} height={340+'px'}/>
            </div>
            <input type='file' id='Imgload' onChange={this.show}></input>
            <div className='reloadButton' onClick={this.reload}><div className='reloadButtonText'>reload</div></div>
            <div className='generateButton' onClick={()=>{this.generate()}} ><div className='generateButtonText'>generate</div></div>                
            </div>)
    }
}}