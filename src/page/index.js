import React,{Component} from 'react' 
import './index.css'
import '../font/Cabin,Poppins/index.css'
//import $ from 'jquery'
import ProgressBar from "../componet/meta/progressbar";
import UploadBroad from "../componet/association/uploadbroad";
import Peeps1 from "../componet/meta/peeps1";
import Peeps2 from "../componet/meta/peeps2";
import NextButton1 from "../componet/meta/nextbutton1";
import NextButton2 from "../componet/meta/nextbutton2";
import BackButton1 from "../componet/meta/backbutton1";
import ScenarioButton from "../componet/meta/scenariobutton";
import ScenarioButton2 from "../componet/meta/scenariobutton2";
import StyleButton from "../componet/meta/stylebutton";
import Loading from "../componet/meta/loading";
import axios from 'axios'
import{ProductsList,ProductsListO,StyleBarList,PortraitBarList,url,headp,peepsp,canvasW,svg1,svg2,svg3,svg4} from "./variable";


class Scenariobar extends Component{
  constructor(props){
    super(props)
    
    this.state={peeps:this.props.peeps,scenario1:this.props.scenario1,scenario2:this.props.scenario2,portrait:this.props.portrait,style:this.props.style}
    this.scenarioTo=this.scenarioTo.bind(this)
  }
  static getDerivedStateFromProps(props, state) {
    return {peeps:props.peeps,scenario1:props.scenario1,scenario2:props.scenario2,portrait:props.portrait,style:props.style};
  }
  scenarioTo(num){
    this.setState({scenario1:num,scenario2:0})
    this.props.transscenario1(num);
  }
  render(){
   
    var barlist=[]
    var StyleList=ProductsList
    var t=0
    var basex=0;var basey=0;
    for(let i in StyleList){
      if(i!=='0'){barlist.push([i,StyleList[i],t,basex,basey+t*76])
        t+=1}
      
    }
    var ddddiv=barlist.map((item,index)=><StyleButton id={item[0]} transtyle={this.props.transscenario1} style={item[0]===this.state.scenario1?1:0} key={item[0]} text={item[0]} x={item[3]} y={item[4]} l={159} n={58} t={11+'px'}></StyleButton>)
    if(1){
      return (<div>
        <div className='scenariobarbar' >
        {ddddiv}
        </div>
        </div>)}}}     
class StyleBar extends Component{
  constructor(props){
    super(props)
    this.state={
      peeps:this.props.peeps,
      scenario1:this.props.scenario1,
      scenario2:this.props.scenario2,
      portrait:this.props.portrait,
      style:this.props.style,
      iscanvas:this.props.iscanvas
    }
  this.scenarioTo=this.scenarioTo.bind(this)
  }
  static getDerivedStateFromProps(props, state) {
    return {peeps:props.peeps,scenario1:props.scenario1,scenario2:props.scenario2,
      portrait:props.portrait,style:props.style,iscanvas:0};
  }
  scenarioTo(num){
    this.setState({scenario1:num,scenario2:0})
    this.props.transscenario1(num);}
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
     var tickf=(s)=> {
      
      if(s.canvasRef){
        
        var canvaswidth=canvasW
        var stylepram=StyleBarList[s.state.scenario1][s.state.scenario2][s.state.style]
        //console.log('pram',stylepram)
        var ctx=s.canvasRef.getContext('2d')

        ctx.clearRect(0,0,canvaswidth,canvaswidth)
        ctx.globalCompositeOperation ='darker'
        ctx.globalAlpha=1
        var imgObj1 = new Image();
        imgObj1.src=ProductsListO[s.state.scenario1][s.state.scenario2]['pic']
        ctx.drawImage(imgObj1,0, 0,canvaswidth,canvaswidth);
        ctx.globalAlpha=0.8
        if(!ProductsList[s.state.scenario1][s.state.scenario2]['pic']){console.log('failed')}
        var p = Math.PI / 180;
        for(let ii in stylepram){
          var i=stylepram[ii]
          var parmi={sx:i.sx?i.sx:1,tx:i.tx?i.tx:0,sy:i.sy?i.sy:1,ty:i.ty?i.ty:0,e:i.x?i.x*canvaswidth:0,f:i.y?i.y*canvaswidth:0,degree:i.degree?i.degree:0}
          //ctx.rotate(parmi.degree)
          ctx.transform(1,0,0,1,parmi.e,parmi.f)
          ctx.rotate(parmi.degree)
          //parmi.sx,parmi.sy*parmi.ty,parmi.sx*parmi.tx,parmi.sy
          ctx.transform(parmi.sx,parmi.sy*parmi.ty,parmi.sx*parmi.tx,parmi.sy,0,0)
          var imgObj3=new Image()
          imgObj3.src=s.state.peeps
          ctx.drawImage(imgObj3,0+headp[0]*canvaswidth,0+headp[1]*canvaswidth,headp[2]*canvaswidth,headp[3]*canvaswidth);
          var imgObj2=new Image()
          imgObj2.src=PortraitBarList[s.state.scenario1][s.state.portrait]['pic']
          ctx.drawImage(imgObj2,0+peepsp[0]*canvaswidth,0+peepsp[1]*canvaswidth,peepsp[2]*canvaswidth,peepsp[3]*canvaswidth);
          ctx.setTransform()
          //console.log(parm_i)

          
        }
        
        /*
        var parm_i={tx:i.x?i.x*canvaswidth:0,ty:i.y?i.y*canvaswidth:0,t:i.t?i.t:0,degree:i.degree?i.degree:0,sx:i.sx?i.sx:1,sy:i.sy?i.sy:1}
          var args_i = [
            parm_i.sx * Math.cos(p * parm_i.degree),
            parm_i.sx * Math.sin(p * parm_i.degree),
            parm_i.t * parm_i.sx * Math.cos(p * parm_i.degree) - parm_i.sy * Math.sin(p * parm_i.degree),
            parm_i.t * parm_i.sx * Math.sin(p * parm_i.degree) + parm_i.sy * Math.cos(p * parm_i.degree),
            parm_i.tx,
            parm_i.ty];
          var a=args_i[0],b=args_i[1],c=args_i[2],d=args_i[3],e=args_i[4],f=args_i[5]
          var angle = Math.atan2(b, a);
          var denom = Math.pow(a, 2) + Math.pow(b, 2);
          var scaleX = Math.sqrt(denom);
          var scaleY = (a * d - c * b) / scaleX;
          var skewX = Math.atan2(a * c + b * d, denom);
          var skewY = 0;
          var translateX = e;
          var translateY = f;
          ctx.translate(translateX, translateY);
          ctx.rotate(angle);
          ctx.scale(scaleX, scaleY);
        */
      }

    }
    tickf(this)
    
  }
  render(){
    //this.props.trancanvas(0)
    var barlist=[]
    var StyleList=StyleBarList[this.state.scenario1][this.state.scenario2]
    var t=0
    var basex=0;var basey=0;
    for(let i in StyleList){
      barlist.push([i,StyleList[i],t,basex,basey+t*79])
      t+=1
    }
    var ddddiv=barlist.map((item,index)=><StyleButton id={item[0]} transtyle={this.props.transtyle} style={item[0]===this.state.style?1:0} key={item[0]} text={item[0]} x={item[3]} y={item[4]} l={159} n={58} t={11+'px'}></StyleButton>)
    if(this.state.style){//var sssv=StyleBarList[this.state.scenario1][this.state.scenario2]
      return (<div>
        <div className='stylebarbar' >
        {ddddiv}
        </div>
        <div style={{position:"absolute",width:617,height:509,left: '542px',top: '244px',background: '#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)'}}>


        <canvas id='stylebarcanvas' width={canvasW} height={canvasW} style={{position: 'absolute',width: '500px',height: '500px',left: 58,top: 4,background: '#FFFFFF',
     }} ref={(ref) => {this.canvasRef = ref;}}>
      
     </canvas>
        </div>
        
  
      </div>)}
      //PortraitBarList[this.state.scenario1][this.state.scenario2]['pic']
    else{return (<div>
      <div className='stylebarbar' >
      {ddddiv}
      </div>
      
      <div style={{position: 'absolute',width: '617px',height: '509px',left: '542px',top: '244px',background: '#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',
   }}>
    <div style={{position:'absolute',left:87,top:32,width:443,height:437}}>
    
    </div>
   </div>
    </div>)}
    } 
}
class ProductBar extends Component{
  constructor(props){
    super(props)
    this.state={scenario1:this.props.scenario1,scenario2:this.scenario2}
    this.scenario2To=this.scenario2To.bind(this)
  }
  static getDerivedStateFromProps(props, state) {
    return {scenario1:props.scenario1,scenario2:props.scenario2};
  }
  scenario2To(){}
  render(){
    var s1=this.state.scenario1
    var barlist=[]
    var Products=ProductsList[s1]
    var t=0
    var basex=0;var basey=0;
    for(let i in Products){
      barlist.push([i,Products[i]['pic'],t,basex+t%2*232,basey+(t-t%2)/2*228])
      t+=1
    }
    //console.log(barlist)
    var ddiv=barlist.map((item,index)=><ScenarioButton E={1} key={index} transscenario2={this.props.transscenario2} id={item[0]} l={208}x={item[3]} y={item[4]} peeps={item[1]} style={(item[0]===this.state.scenario2)?1:0}></ScenarioButton>)
    return <div className='Productsbar'>{ddiv}</div>}
}
class PortraitBar extends Component{
  constructor(props)
  {super(props)
  this.state={peeps:this.props.peeps,scenario1:this.props.scenario1,scenario2:this.props.scenario2,portrait:this.props.portrait}}
  static getDerivedStateFromProps(props, state) {
    return {scenario1:props.scenario1,scenario2:props.scenario2,portrait:props.portrait};
  }
  render(){
    
    var s1=this.state.scenario1
    var barlist=[]
    var Portrait=PortraitBarList[s1]
    var t=0
    var basex=0;var basey=0;
    for(let i in Portrait){
      if(this.state.scenario1 )
      {barlist.push([i,Portrait[i]['pic'],t,basex,basey+t*180])}
      else{barlist.push([i,0,t,basex,basey+t*180])}
      t+=1
    }
    
    var dddiv=barlist.map((item,index)=><ScenarioButton2 key={index} headp={headp} peepsp={peepsp} head={this.state.peeps} transscenario2={this.props.transportrait} E={0} id={item[0]} l={150}x={item[3]} y={item[4]} peeps={item[1]} style={(item[0]===this.state.portrait)?1:0}></ScenarioButton2>)
    if(this.state.scenario1 && !this.state.scenario2){
      return(<div><div style={{position: 'absolute',width: '445px',height: '513px',left: '801px',top: '242px',background: '#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',
    }}>
      
    </div><div  className='protraitBBar' >{dddiv}</div>
    <svg width="288" height="209" transform='translate(882,351)' fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M58.8535 0.463298L0 94.7914L58.8535 131.512V209H230.854V129.221L287.077 96.7598L231.213 2.67029e-05L230.854 0.207671V0H197.595C185.79 16.3552 166.565 27 144.854 27C123.142 27 103.917 16.3552 92.1124 0H59.1426H58.8535V0.463298Z" fill="#F3F3F3"/>
<circle cx="188.1" cy="59.4716" r="8.47157" fill="#D9D9D9"/>
<path d="M202.136 103.424H176.177C173.789 103.424 171.845 101.492 171.994 99.109C172.755 86.9294 176.801 68.7407 188.886 68.7407C200.947 68.7407 205.324 86.8553 206.314 99.0343C206.509 101.444 204.554 103.424 202.136 103.424Z" fill="#D9D9D9"/>
</svg>
    </div>)
    }
    else if(this.state.scenario1 && this.state.scenario2){
      return(<div><div style={{position: 'absolute',width: '445px',height: '513px',left: '801px',top: '242px',background: '#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',
    }}>
      <div style={{position:'absolute',left:45+'px',top:50+'px'}}><img src={ProductsListO[this.state.scenario1][this.state.scenario2]['pic']} alt='no way' width={350+'px'} height={350+'px'}/></div>
      <div style={{position: 'absolute',width: '100%',height:'60px',textAlign:'center',top: '425px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '40px',lineHeight: '60px',color:'#4D59BF'
}}>{this.state.scenario2}</div>
    </div><div  className='protraitBBar' >{dddiv}</div>
    </div>)}
    return(<div><div style={{position: 'absolute',width: '445px',height: '513px',left: '801px',top: '242px',background: '#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',
  }}></div>
    <svg width="288" height="209" transform='translate(882,351)' fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M58.8535 0.463298L0 94.7914L58.8535 131.512V209H230.854V129.221L287.077 96.7598L231.213 2.67029e-05L230.854 0.207671V0H197.595C185.79 16.3552 166.565 27 144.854 27C123.142 27 103.917 16.3552 92.1124 0H59.1426H58.8535V0.463298Z" fill="#F3F3F3"/>
<circle cx="188.1" cy="59.4716" r="8.47157" fill="#D9D9D9"/>
<path d="M202.136 103.424H176.177C173.789 103.424 171.845 101.492 171.994 99.109C172.755 86.9294 176.801 68.7407 188.886 68.7407C200.947 68.7407 205.324 86.8553 206.314 99.0343C206.509 101.444 204.554 103.424 202.136 103.424Z" fill="#D9D9D9"/>
</svg>
<div className='protraitBBar' >{dddiv}</div>
    </div>)

  }
}
export default class BackBroad extends Component {
    constructor(props){
        super(props)
        this.state={progress:1,pic:0,picmode:0,peeps1:0,peeps2:0,peeps3:0,peeps4:0,scenario1:0,scenario2:0,portrait:0,style:0,iscanvas:0}
        this.toProgress = this.toProgress.bind(this);
        this.transpic=this.transpic.bind(this)
        this.transscenario1=this.transscenario1.bind(this)
        this.transscenario2=this.transscenario2.bind(this)
        this.transportrait=this.transportrait.bind(this)
        this.transtyle=this.transtyle.bind(this)
        this.xx12=this.xx12.bind(this)
        this.xx13=this.xx13.bind(this)
        this.xx14=this.xx14.bind(this)
        this.refresh=this.refresh.bind(this)
        this.trancanvas=this.trancanvas.bind(this)
    }
    refresh(){
      var transpeeps=[(p1,p2,p3,p4,t)=>{t.setState({peeps1:p1,peeps2:p2,peeps3:p3,peeps4:p4})},this]
      document.getElementsByClassName('loading')[0].style.display='block'
      const f1=async()=>{
          function getBase64(file) {
              return new Promise((resolve, reject) => {
                  const reader = new FileReader()
                  reader.readAsDataURL(file)
                  reader.onload = () => resolve(reader.result)
                  reader.onerror = error => reject(error)
              })
          }
           getBase64( this.state.pic ).then(async pic=> {
              var res=await axios({
                  url: url,
                  method: "post",
                  data: {'pic':pic,'num':3},
                })
                var data1='data:image/svg+xml;base64,'+String(res.data.message[0]);
                var data2='data:image/svg+xml;base64,'+String(res.data.message[1]);
                var data3='data:image/svg+xml;base64,'+String(res.data.message[2]);
                transpeeps[0](transpeeps[1].state.peeps1,data1,data2,data3,transpeeps[1])
                document.getElementsByClassName('loading')[0].style.display='none'  
              //成功你做的事情
            }).catch(err=>{
              console.log(err)
              document.getElementsByClassName('loading')[0].style.display='none'  
            })
          //console.log(transpeeps[0])
         
          //var res=await axios.post("http://202.120.165.128:8848/service/avatar",formData,{'Content-Type':'multipart/form-data','Access-Control-Allow-Origin':"*"})
      }
      f1()       
        
  }
    toProgress(a){
        this.setState({progress:a,pic:this.state.pic})
    }
    transpic(pic,picmode){
      if(pic && picmode){this.setState({pic:pic,picmode:picmode,
        //peeps1:svg1,peeps2:svg2,peeps3:svg3,peeps4:svg4
      })}
      else{this.setState({pic:pic,picmode:picmode,peeps1:0,peeps2:0,peeps3:0,peeps4:0})}
      
      //alert('you lose')
      //this.props.transpeeps(this.state.peeps1,this.state.peeps2,this.state.peeps3,this.state.peeps4)
}   

transscenario1(num){
  this.setState({pic:this.state.pic,picmode:this.state.picmode,peeps1:this.state.peeps1,peeps2:this.state.peeps2,peeps3:this.state.peeps3,peeps4:this.state.peeps4,scenario1:num,scenario2:0,portrait:0,style:0})
}
trancanvas(num){this.setState({iscanvas:num})}
transscenario2(num){
  this.setState({pic:this.state.pic,picmode:this.state.picmode,peeps1:this.state.peeps1,peeps2:this.state.peeps2,peeps3:this.state.peeps3,peeps4:this.state.peeps4,scenario1:this.state.scenario1,scenario2:num,portrait:this.state.portrait,style:0})
}
transportrait(num){
  this.setState({pic:this.state.pic,picmode:this.state.picmode,peeps1:this.state.peeps1,peeps2:this.state.peeps2,peeps3:this.state.peeps3,peeps4:this.state.peeps4,scenario1:this.state.scenario1,scenario2:this.state.scenario2,portrait:num,style:0})
}
transtyle(num){
  this.setState({pic:this.state.pic,picmode:this.state.picmode,peeps1:this.state.peeps1,peeps2:this.state.peeps2,peeps3:this.state.peeps3,peeps4:this.state.peeps4,scenario1:this.state.scenario1,scenario2:this.state.scenario2,portrait:this.state.portrait,style:num})
}
transpeeps(peeps1,peeps2,peeps3,peeps4){
        
  this.setState({peeps1:peeps1,peeps2:peeps2,peeps3:peeps3,peeps4:peeps4})}
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        300
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
    }
    xx12(){var a=this.state.peeps1;
      var b=this.state.peeps2;
      var s1= {peeps1:b,peeps2:a,peeps3:this.state.peeps3,peeps4:this.state.peeps4}
      this.setState(s1);}
  xx13(){var a=this.state.peeps1;
      var b=this.state.peeps3;
      var s1= {peeps1:b,peeps2:this.state.peeps2,peeps3:a,peeps4:this.state.peeps4}
      this.setState(s1);}
  xx14(){var a=this.state.peeps1;
      var b=this.state.peeps4;
      var s1= {peeps1:b,peeps2:this.state.peeps2,peeps3:this.state.peeps3,peeps4:a}
      this.setState(s1);}
render(){
  //console.log(this.state)
  if(this.state.progress===1){if(!this.state.peeps1){
    return (
      <div>
      <div className="backbroad" >
        
        <div className='title'>selfPortrait</div>
        <div className='progressbar'>
        <ProgressBar progress={this.state.progress} x={419} y={77}/>
        </div>
        <div className='text5' >Make your avatar</div>
        <div className='text6' >Select your product</div>
        <div className='text7' >Change the style</div>
        <div className='page'>
        <div>
        <UploadBroad transpic={this.transpic} transpeeps={[(p1,p2,p3,p4,t)=>{t.setState({peeps1:p1,peeps2:p2,peeps3:p3,peeps4:p4})},this]} pic={this.state.pic} picmode={this.state.picmode}></UploadBroad>
        <div>
        <div style={{/* Select a scenario and product */position: 'absolute',width: '490px',height: '71px',left: '776px',top: '189px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '32px',lineHeight: '48px',color: '#595566'
  }}>Check your avatar</div>
          <Peeps1 peeps={this.state.peeps1} ></Peeps1>
<div onClick={this.xx12}>
<Peeps2 peeps={this.state.peeps2} x={[1178,244,130,130]} picx={[10,10,110,120]} ></Peeps2></div>
<div onClick={this.xx13}>
        <Peeps2 peeps={this.state.peeps3} x={[1178,397,130,130]}  picx={[10,10,110,120]} ></Peeps2>
        </div>
<div onClick={this.xx14}>
        <Peeps2 peeps={this.state.peeps4} x={[1178,551,130,130]}  picx={[10,10,110,120]}></Peeps2>
       </div>

    </div>
        </div>
    </div>
    
      </div>
      <Loading x={0} y={0} ></Loading></div>)
  }else{
    return (
      <div>
      <div className="backbroad" >
        <div className='title'>selfPortrait</div>
        <div className='progressbar'>
        <ProgressBar progress={this.state.progress} x={419} y={77}/>
        </div>
        <div className='text5' >Make your avatar</div>
        <div className='text6' >Select your product</div>
        <div className='text7' >Change the style</div>
        <div className='page'>
        <div>
          <UploadBroad transpic={this.transpic} transpeeps={[(p1,p2,p3,p4,t)=>{t.setState({peeps1:p1,peeps2:p2,peeps3:p3,peeps4:p4})},this]} pic={this.state.pic} picmode={this.state.picmode}></UploadBroad>
          <div>
          <div style={{/* Select a scenario and product */position: 'absolute',width: '490px',height: '71px',left: '776px',top: '189px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '32px',lineHeight: '48px',color: '#595566'
  }}>Check your avatar</div>
            <Peeps1 peeps={this.state.peeps1} ></Peeps1>
            <div onClick={this.xx12}><Peeps2 peeps={this.state.peeps2} x={[1178,244,130,130]} picx={[10,10,110,120]} ></Peeps2></div>
            <div onClick={this.xx13}><Peeps2 peeps={this.state.peeps3} x={[1178,397,130,130]}  picx={[10,10,110,120]} ></Peeps2></div>
            <div onClick={this.xx14}><Peeps2 peeps={this.state.peeps4} x={[1178,551,130,130]}  picx={[10,10,110,120]}></Peeps2></div>
          </div>
        </div>
        </div>
        <svg width="52" height="52" onClick={this.refresh} transform='translate(1217,661)' fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="26" cy="26" r="24.4078" fill="#4D59BF" stroke="#4D59BF" strokeWidth="3.18447"/>
<path d="M37.8198 30.5925C35.3392 36.8927 28.1061 39.9439 21.6643 37.4075C15.2225 34.8711 12.0113 27.7077 14.4919 21.4075C16.9725 15.1073 24.2055 12.0561 30.6474 14.5925C33.1283 15.5694 35.13 17.2325 36.512 19.2683" stroke="white" strokeWidth="3" strokeLinecap="round"/>
<path d="M30.952 21.1603L38.6572 21.3342L38.0103 13.7696" stroke="white" strokeWidth="3" strokeLinecap="round"/>
</svg>

        <div onClick={(()=>{this.toProgress(2)})}><div className='nextButton1Text'>Next</div><NextButton1></NextButton1></div>
      </div>
      <Loading x={0} y={0} ></Loading></div>)
  } 
  }
  else if(this.state.progress===2){
    if(this.state.portrait && this.state.scenario1 && this.state.scenario2){
      return (
        <div><div className="backbroad" >
          <div className='title'>selfPortrait</div>
          <div className='progressbar'>
          <ProgressBar progress={this.state.progress} x={419} y={77}/>
          </div>
  
          <div className='text5' >Make your avatar</div>
          <div className='text6' >Select your product</div>
          <div className='text7' >Change the style</div>
          <div style={{/* Select a scenario and product */position: 'absolute',width: '490px',height: '71px',left: '168px',top: '181px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '32px',lineHeight: '48px',color: '#595566'
  }}>Select a scenario and product</div>
  <div style={{/* Select a scenario and product */position: 'absolute',width: '287px',height: '48px',left: '1007px',top: '181px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '32px',lineHeight: '48px',color: '#595566'
  }}>Select a portrait</div>
  
          <div className='page'>
            <Scenariobar scenario1={this.state.scenario1} transscenario1={this.transscenario1}></Scenariobar>
            <ProductBar scenario1={this.state.scenario1} scenario2={this.state.scenario2} transscenario2={this.transscenario2}></ProductBar>
            <PortraitBar peeps={this.state.peeps1} portrait={this.state.portrait} scenario1={this.state.scenario1} scenario2={this.state.scenario2} transportrait={this.transportrait}> </PortraitBar>
          </div>
          <div onClick={(()=>{this.toProgress(1)})}><div className='backButton1Text'>Back</div><BackButton1></BackButton1></div>
          <div onClick={(()=>{this.toProgress(3)})}><div className='NextButton2Text'>Next</div><NextButton2></NextButton2></div>
        
        </div></div>)
    }
    return (
      <div><div className="backbroad" >
        <div className='title'>selfPortrait</div>
        <div className='progressbar'>
        <ProgressBar progress={this.state.progress} x={419} y={77}/>
        </div>

        <div className='text5' >Make your avatar</div>
        <div className='text6' >Select your product</div>
        <div className='text7' >Change the style</div>
        <div style={{/* Select a scenario and product */position: 'absolute',width: '490px',height: '71px',left: '168px',top: '181px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '32px',lineHeight: '48px',color: '#595566'
}}>Select a scenario and product</div>
<div style={{/* Select a scenario and product */position: 'absolute',width: '287px',height: '48px',left: '1007px',top: '181px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '32px',lineHeight: '48px',color: '#595566'
}}>Select a portrait</div>

        <div className='page'>
          <Scenariobar scenario1={this.state.scenario1} transscenario1={this.transscenario1}></Scenariobar>
          <ProductBar scenario1={this.state.scenario1} scenario2={this.state.scenario2} transscenario2={this.transscenario2}></ProductBar>
          <PortraitBar peeps={this.state.peeps1} portrait={this.state.portrait} scenario1={this.state.scenario1} scenario2={this.state.scenario2} transportrait={this.transportrait}> </PortraitBar>
        </div>
        <div onClick={(()=>{this.toProgress(1)})}><div className='backButton1Text'>Back</div><BackButton1></BackButton1></div>
      </div></div>)}
    else if(this.state.progress===3){
      if(this.state.style){
        return (<div>
          <div className="backbroad" >
            <div className='title'>selfPortrait</div>
            <div className='progressbar'>
            <ProgressBar progress={this.state.progress} x={419} y={77}/>
            </div>
            <div className='text5' >Make your avatar</div>
            <div className='text6' >Select your product</div>
            <div className='text7' >Change the style</div>
            <div className='page'>
            <div style={{/* Select a scenario and product */position: 'absolute',width: '360px',height: '71px',left: '740px',top: '188px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '32px',lineHeight: '48px',color: '#595566'
    }}>Select a style</div>
    <StyleBar peeps={this.state.peeps1} iscanvas={0} transtyle={this.transtyle} style={this.state.style} portrait={this.state.portrait} scenario1={this.state.scenario1} scenario2={this.state.scenario2}></StyleBar>
    <div onClick={(()=>{this.toProgress(2)})}><div className='backButton1Text'>Back</div><BackButton1></BackButton1></div>
    <div onClick={(()=>{console.log(1);let data = document.getElementById('stylebarcanvas').toDataURL();
    const a_link = document.createElement('a');
    fetch(data)    // 括号里是文件链接
    .then((res) => res.blob())
     .then((blob) => {
          // 将链接地址字符内容转变成blob地址
       a_link.href = URL.createObjectURL(blob);
       //console.log(a_link.href);
       a_link.download = 'this'; //下载的文件的名字
       document.body.appendChild(a_link);
       a_link.click();
   });
    
    })}><div className='exportButtonText'>Export</div><NextButton2></NextButton2></div>
            
            </div>
          </div></div>)
      }
      return (<div>
        <div className="backbroad" >
          <div className='title'>selfPortrait</div>
          <div className='progressbar'>
          <ProgressBar progress={this.state.progress} x={419} y={77}/>
          </div>
          <div className='text5' >Make your avatar</div>
          <div className='text6' >Select your product</div>
          <div className='text7' >Change the style</div>
          <div className='page'>
          <div style={{/* Select a scenario and product */position: 'absolute',width: '360px',height: '71px',left: '740px',top: '188px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '32px',lineHeight: '48px',color: '#595566'
  }}>Select a style</div>
  <StyleBar  iscanvas={0} peeps={this.state.peeps1} transtyle={this.transtyle} style={this.state.style} portrait={this.state.portrait} scenario1={this.state.scenario1} scenario2={this.state.scenario2}></StyleBar>
          <div onClick={(()=>{this.toProgress(2)})}><div className='backButton1Text'>Back</div><BackButton1></BackButton1></div>
          
          </div>
        </div></div>)
    }
  }

  
}

