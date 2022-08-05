import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'
import './uploadbroad.css'
import { $ } from "jquery";
import camera from '../../img/camera2.png'
import axios from 'axios'
class Video1 extends Component{
    constructor(props){super(props);
        this.state={pic:this.props.pic,picmode:this.props.picmode};
        this.takePhoto=this.takePhoto.bind(this);
        this.getMedia=this.getMedia.bind(this)
        this.dataURLtoFile=this.dataURLtoFile.bind(this)}
       
    componentDidMount(){
        this.getMedia()
    }
    dataURLtoFile(dataurl, filename = 'file') {
        let arr = dataurl.split(',')
        let mime = arr[0].match(/:(.*?);/)[1]
        let suffix = mime.split('/')[1]
        let bstr = atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], `${filename}.${suffix}`, {
          type: mime
        })
      }
    takePhoto() {
        let video = document.getElementById("video");
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, 294, 378);
        var image = new Image();
        
        image.src = canvas.toDataURL("image/jpeg");
        var sss=this.dataURLtoFile(image.src)
        console.log('--------------','         ----------',sss)
        this.setState({pic: sss,picmode:'file'})
        this.props.transpic(sss,'file')
        video.srcObject.getTracks()[0].stop();
    }
    componentWillUnmount(){
        let video = document.getElementById("video");
        if(video.srcObject){video.srcObject.getTracks()[0].stop()};
    }
    getMedia() {
        let constraints = {
            video: {width: 294, height: 378},
            audio:false
        };
        let video = document.getElementById("video");
        let promise = navigator.mediaDevices.getUserMedia(constraints);
        promise.then(function (MediaStream) {
            video.srcObject = MediaStream;
            video.play();
        });
    }
    render(){
        return(

            <div id="videoDiv">   
                
                <video   style={{position:'absolute',left:0,top:0}}  id="video" width="294px" height="378px" autoPlay="autoplay" onLoad={()=>{}}></video>
                <canvas style={{ position:'absolute',left:0,top:0}} id="canvas" width="294px" height="378px"></canvas>
                      
                <div style={{position:'absolute',left:123,top:318}} onClick={()=>{this.takePhoto();}}><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23" r="23" fill="#4D59BF"/>
<circle cx="23" cy="23" r="17" stroke="white" strokeWidth="2"/>
</svg>
</div>
            </div>
        )
    }
    
}
export default class UploadBroad extends Component {
    constructor(props){
        super(props)
        this.state={pic:this.props.pic,picmode:this.props.picmode}
        this.uploadImg=this.uploadImg.bind(this)
        this.load=this.load.bind(this)
        this.reload=this.reload.bind(this)
        this.show=this.show.bind(this)
        this.generate=this.generate.bind(this)
        this.takephoto=this.takephoto.bind(this)
        this.takePhoto=this.takePhoto.bind(this)
        this.getMedia=this.getMedia.bind(this)
        this.getpicFromVideo=this.getpicFromVideo.bind(this)
        this.fff=0
    }
    getpicFromVideo(pic,picmode){
  this.setState({pic:pic,picmode:picmode})
    }
    uploadImg(pi,type){this.setState({pic:pi,picmode:type});}
    show(){var img=document.querySelector('input[type=file]').files[0];this.uploadImg(img,'file');}
    load(){if(!this.state.pic){document.getElementById('Imgload').click()}}
    takephoto(){this.setState({takephotomode:1})}
    //reload(){if(this.state.pic){document.getElementById('Imgload').click()}}
    reload(){this.setState({pic:0,takephotomode:0,picmode:0});this.uploadImg(0,0);}
    generate(){
        //console.log('transpeeps\n------\n',this.props.transpeeps,this.props.transpic)

        var transpeeps=this.props.transpeeps
        console.log(transpeeps)
        this.props.transpic(this.state.pic,this.state.picmode)
        const f1=async()=>{
            //console.log(transpeeps[0])
            var res=await axios({
                url: "http://202.120.165.128:8848/service/avatar",
                method: "post",
                data: {'date':this.state.pic,'picmode':this.state.picmode},
              })
              var data1='data:image/svg+xml;base64,'+String(res.data.message[0]);
              var data2='data:image/svg+xml;base64,'+String(res.data.message[1]);
              var data3='data:image/svg+xml;base64,'+String(res.data.message[2]);
              var data4='data:image/svg+xml;base64,'+String(res.data.message[3]);
              
              transpeeps[0](data1,data2,data3,data4,transpeeps[1])

        }
        var ss=f1()
        //console.log(ss)
       
            
    }
    async takePhoto() {
        //获得Canvas对象
        let video = document.getElementById("video");
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, 269, 340);
        var image = new Image();
        image.src = canvas.toDataURL("image/jpeg");
        //this.setState({pic:image.src})
        this.uploadImg(image.src,'base64')
        if(video.srcObject){video.srcObject.getTracks()[0].stop()};
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
                <div style={{position:"absolute",left:72,top:20}}>
                <Video1 pic={this.state.pic} transpic={this.getpicFromVideo} picmode={this.state.picmode}></Video1>
                </div>
                <input type='file' id='Imgload' onChange={this.show}></input>
                </div>
                <div className='reloadButton' onClick={()=>{let video = document.getElementById("video");
        if(video.srcObject){video.srcObject.getTracks()[0].stop()};this.reload()}}><div className='reloadButtonText'>reload</div></div>
                <div className='generateButton' ><div className='generateButtonText'>generate</div></div>            
                </div>
               
            )
           }
           /*
           <div id="videoDiv">   
                
                <video   style={{position:'absolute',left:85,top:35}}  id="video" width="269px" height="340px" autoPlay="autoplay" onLoad={()=>{}}></video>
                <canvas style={{ position:'absolute',left:85,top:35}} id="canvas" width="269px" height="340px"></canvas>
                      
                
                <img style={{ position:'absolute',left:60,top:20}} width={30} height={25} src={camera} onClick={this.getMedia}/>
                <img style={{ position:'absolute',left:335,top:20}} width={30} height={25} src={camera} onClick={this.takePhoto}/>

                </div>
           */
    else if(!this.state.pic&& !this.state.takephotomode){
            return (
                <div>
                <div className='AvatarPhotoName'>Upload your selfie</div>
                <div className='photoBroad'>
                <div style={{position:'absolute',left:187,top:107}}onClick={()=>{this.setState({pic:0,takephotomode:1})}}><svg width="76" height="76" transform='' fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="38" cy="38" r="38" fill="#4D59BF"/>
<path d="M46.8614 27.3469L46.1543 28.054L46.8614 27.3469ZM28.3699 27.3469L27.6628 26.6398L28.3699 27.3469ZM43.3932 23.8787L44.1003 23.1716L43.3932 23.8787ZM33.9594 24H41.2719V22H33.9594V24ZM29.077 28.054L32.5452 24.5858L31.131 23.1716L27.6628 26.6398L29.077 28.054ZM22 29.2256H26.2486V27.2256H22V29.2256ZM20 49.3934V31.2256H18V49.3934H20ZM53.2314 51.3934H22V53.3934H53.2314V51.3934ZM55.2314 31.2256V49.3934H57.2314V31.2256H55.2314ZM48.9827 29.2256H53.2314V27.2256H48.9827V29.2256ZM42.6861 24.5858L46.1543 28.054L47.5685 26.6398L44.1003 23.1716L42.6861 24.5858ZM48.9827 27.2256C48.4523 27.2256 47.9436 27.0149 47.5685 26.6398L46.1543 28.054C46.9045 28.8042 47.9219 29.2256 48.9827 29.2256V27.2256ZM57.2314 31.2256C57.2314 29.0165 55.4406 27.2256 53.2314 27.2256V29.2256C54.336 29.2256 55.2314 30.121 55.2314 31.2256H57.2314ZM53.2314 53.3934C55.4406 53.3934 57.2314 51.6025 57.2314 49.3934H55.2314C55.2314 50.4979 54.336 51.3934 53.2314 51.3934V53.3934ZM18 49.3934C18 51.6025 19.7909 53.3934 22 53.3934V51.3934C20.8954 51.3934 20 50.4979 20 49.3934H18ZM22 27.2256C19.7909 27.2256 18 29.0165 18 31.2256H20C20 30.121 20.8954 29.2256 22 29.2256V27.2256ZM27.6628 26.6398C27.2878 27.0149 26.7791 27.2256 26.2486 27.2256V29.2256C27.3095 29.2256 28.3269 28.8042 29.077 28.054L27.6628 26.6398ZM41.2719 24C41.8024 24 42.3111 24.2108 42.6861 24.5858L44.1003 23.1716C43.3502 22.4215 42.3328 22 41.2719 22V24ZM33.9594 22C32.8986 22 31.8812 22.4215 31.131 23.1716L32.5452 24.5858C32.9203 24.2108 33.429 24 33.9594 24V22Z" fill="white"/>
<circle cx="37.9428" cy="39.3295" r="7.18502" stroke="white" strokeWidth="2"/>
</svg></div>
<div style={{position:'absolute',left:213,top:195}}>
<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.536 14.216C6.288 14.216 5.16 13.936 4.152 13.376C3.144 12.8 2.352 12 1.776 10.976C1.2 9.936 0.912 8.736 0.912 7.376C0.912 6.032 1.208 4.84 1.8 3.8C2.392 2.76 3.2 1.96 4.224 1.4C5.248 0.84 6.392 0.56 7.656 0.56C8.92 0.56 10.064 0.84 11.088 1.4C12.112 1.96 12.92 2.76 13.512 3.8C14.104 4.84 14.4 6.032 14.4 7.376C14.4 8.72 14.096 9.912 13.488 10.952C12.88 11.992 12.048 12.8 10.992 13.376C9.952 13.936 8.8 14.216 7.536 14.216ZM7.536 11.84C8.24 11.84 8.896 11.672 9.504 11.336C10.128 11 10.632 10.496 11.016 9.824C11.4 9.152 11.592 8.336 11.592 7.376C11.592 6.416 11.408 5.608 11.04 4.952C10.672 4.28 10.184 3.776 9.576 3.44C8.968 3.104 8.312 2.936 7.608 2.936C6.904 2.936 6.248 3.104 5.64 3.44C5.048 3.776 4.576 4.28 4.224 4.952C3.872 5.608 3.696 6.416 3.696 7.376C3.696 8.8 4.056 9.904 4.776 10.688C5.512 11.456 6.432 11.84 7.536 11.84ZM19.8407 2.696C20.2407 2.024 20.7687 1.504 21.4247 1.136C22.0967 0.752 22.8887 0.56 23.8007 0.56V3.392H23.1047C22.0327 3.392 21.2167 3.664 20.6567 4.208C20.1127 4.752 19.8407 5.696 19.8407 7.04V14H17.1047V0.776H19.8407V2.696Z" fill="#4D59BF"/>
</svg>
</div>
<div style={{position:'absolute',left:187,top:223}}onClick={this.load}><svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="38" cy="38" r="38" fill="#4D59BF"/>
<path d="M41.3945 43.1228H51.4559" stroke="white" strokeWidth="2" strokeLinecap="round"/>
<path d="M46.4258 38.092L46.4258 48.1534" stroke="white" strokeWidth="2" strokeLinecap="round"/>
<path d="M19 28.1931H53C54.6569 28.1931 56 29.5363 56 31.1931V49.2107C56 50.8675 54.6569 52.2107 53 52.2107H23C20.7909 52.2107 19 50.4198 19 48.2107V40.2019V28.1931Z" stroke="white" strokeWidth="2"/>
<path d="M19 26C19 24.3431 20.3431 23 22 23H25.485C27.5984 23 29.6575 23.6696 31.3667 24.9126L35.8772 28.193H19V26Z" stroke="white" strokeWidth="2"/>
</svg>
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
            <img src={src} className='realPhoto' width={294+'px'} height={378+'px'}/>
            </div>
            <input type='file' id='Imgload' onChange={this.show}></input>
            <div className='reloadButton' onClick={this.reload}><div className='reloadButtonText'>reload</div></div>
            <div className='generateButton' onClick={()=>{this.generate()}} ><div className='generateButtonText'>generate</div></div>                
            </div>)
    }
}}