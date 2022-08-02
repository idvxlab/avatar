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
//import Page1 from './page1'
//src='data:image/svg+xml;base64,
import{ProductsList,StyleBarList,PortraitBarList,svg1,svg2,svg3,svg4} from "./variable";
//
/*

class canvasB extends Component{
  constructor(props){
    this.state={product:this.props.product,peeps:this.props.peeps,portrait:this.props.portrait,l:this.props.l,
    headp:this.props.headp,portraitp:this.props.portraitp,x:this.props.x,y:this.props.y,rotate:this.props.rotate}
  }
  render(){return (<div></div>)}
}*/

/*
class Scenariobar extends Component{
  constructor(props){
    super(props)
    this.state={scenario1:this.props.scenario1}
    this.scenarioTo=this.scenarioTo.bind(this)
  }
  scenarioTo(num){
    this.setState({scenario1:num,scenario2:0})
    this.props.transscenario1(num);
  }
  render(){
    if (this.state.scenario1===0){
      return(
        <div>
          <div style={{position:'absolute',left:89,top:240}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('study')}}>
              <div className='senarioText'>study</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:316}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('work')}}>
              <div className='senarioText'>work</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:392}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('sport')}}>
              <div className='senarioText'>sport</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:472}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('travel')}}>
              <div className='senarioText'>travel</div>
            </div>
          </div>
          <div style={{ position:'absolute',left:89,top:552}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('party')}}>
              <div className='senarioText'>party</div>
            </div>
          </div>
        </div>
      )
    }
    else if (this.state.scenario1==='study'){
      return(
        <div>
          <div style={{position:'absolute',left:89,top:240}}>
            <div className='onclicksenariobox' onClick={()=>{this.scenarioTo('study')}}>
              <div className='onclicksenarioText'>study</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:316}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('work')}}>
              <div className='senarioText'>work</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:392}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('sport')}}>
              <div className='senarioText'>sport</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:472}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('travel')}}>
              <div className='senarioText'>travel</div>
            </div>
          </div>
          <div style={{ position:'absolute',left:89,top:552}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('party')}}>
              <div className='senarioText'>party</div>
            </div>
          </div>
        </div>
      )
    }
    else if (this.state.scenario1==='work'){
      return(
        <div>
          <div style={{position:'absolute',left:89,top:240}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('study')}}>
              <div className='senarioText'>study</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:316}}>
            <div className='onclicksenariobox' onClick={()=>{this.scenarioTo('work')}}>
              <div className='onclicksenarioText'>work</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:392}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('sport')}}>
              <div className='senarioText'>sport</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:472}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('travel')}}>
              <div className='senarioText'>travel</div>
            </div>
          </div>
          <div style={{ position:'absolute',left:89,top:552}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('party')}}>
              <div className='senarioText'>party</div>
            </div>
          </div>
        </div>
      )
    }
    else if (this.state.scenario1==='sport'){
      return(
        <div>
          <div style={{position:'absolute',left:89,top:240}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('study')}}>
              <div className='senarioText'>study</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:316}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('work')}}>
              <div className='senarioText'>work</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:392}}>
            <div className='onclicksenariobox' onClick={()=>{this.scenarioTo('sport')}}>
              <div className='onclicksenarioText'>sport</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:472}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('travel')}}>
              <div className='senarioText'>travel</div>
            </div>
          </div>
          <div style={{ position:'absolute',left:89,top:552}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('party')}}>
              <div className='senarioText'>party</div>
            </div>
          </div>
        </div>
      )
    }
    else if (this.state.scenario1==='travel'){
      return(
        <div>
          <div style={{position:'absolute',left:89,top:240}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('study')}}>
              <div className='senarioText'>study</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:316}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('work')}}>
              <div className='senarioText'>work</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:392}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('sport')}}>
              <div className='senarioText'>sport</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:472}}>
            <div className='onclicksenariobox' onClick={()=>{this.scenarioTo('travel')}}>
              <div className='onclicksenarioText'>travel</div>
            </div>
          </div>
          <div style={{ position:'absolute',left:89,top:552}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('party')}}>
              <div className='senarioText'>party</div>
            </div>
          </div>
        </div>
      )
    }
    else if (this.state.scenario1==='party'){
      return(
        <div>
          <div style={{position:'absolute',left:89,top:240}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('study')}}>
              <div className='senarioText'>study</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:316}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('work')}}>
              <div className='senarioText'>work</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:392}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('sport')}}>
              <div className='senarioText'>sport</div>
            </div>
          </div>
          <div style={{position:'absolute',left:89,top:472}}>
            <div className='senariobox' onClick={()=>{this.scenarioTo('travel')}}>
              <div className='senarioText'>travel</div>
            </div>
          </div>
          <div style={{ position:'absolute',left:89,top:552}}>
            <div className='onclicksenariobox' onClick={()=>{this.scenarioTo('party')}}>
              <div className='onclicksenarioText'>party</div>
            </div>
          </div>
        </div>
      )
    }
    
  }
}
*/
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
    if(this.canvasRef){

      var ctx=this.canvasRef.getContext('2d')
    var imgObj = new Image();
    imgObj.src=ProductsList[this.state.scenario1][this.state.scenario2]['pic']
      ctx.drawImage(imgObj,0, 0,3500,3500);
      
      //ctx.rotate(Math.PI / 4)
      imgObj.src=PortraitBarList[this.state.scenario1][this.state.portrait]['pic']
      //ctx.rotate(-Math.PI / 4)
      ctx.drawImage(imgObj,1500,1800,600,600);
      imgObj.src=this.state.peeps
      //ctx.rotate(-Math.PI / 4)
      ctx.drawImage(imgObj,1530,1500,600,600);

      
      	
    }
      
//console.log(this.state.style)
  }
  //componentDidMount(){
    
    
    /*
      var canvas=document.getElementById('stylebarcanvas')
      var ctx=canvas.getContext('2d')
      */
  //}

  /*
  <div style={{position: 'absolute',width: '617px',height: '509px',left: '0px',top: '0px',background: '#FFFFFF',}}>
      <div style={{position:'absolute',left:87,top:32,width:443,height:437}}>
      <img style={{position:'absolute',left:0,top:0}}width={443} height={437} src={ProductsList[this.state.scenario1][this.state.scenario2]['pic']}/>
      <div style={{position:'absolute',transform: 'rotate(180deg)'+'translate('+500+'px,'+sssv.y+'px'+')  scale('+sssv.scale+')'}}>
      <img src={this.state.peeps} ></img>
      </div>
      
      </div>
      </div>
  */
  render(){
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


        <canvas id='stylebarcanvas' width={3500} height={3500} style={{position: 'absolute',width: '509px',height: '509px',left: 54,top: 0,background: '#FFFFFF',
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
      if(this.state.scenario1 &&this.state.scenario2)
      {barlist.push([i,Portrait[i]['pic'],t,basex,basey+t*180])}
      else{barlist.push([i,0,t,basex,basey+t*180])}
      t+=1
    }
    var headp=[0.23,0.04,0.6,0.6]
    var peepsp=[0.2,0.32,0.6,0.6]
    var dddiv=barlist.map((item,index)=><ScenarioButton2 key={index} headp={headp} peepsp={peepsp} head={this.state.peeps} transscenario2={this.props.transportrait} E={0} id={item[0]} l={150}x={item[3]} y={item[4]} peeps={item[1]} style={(item[0]===this.state.portrait)?1:0}></ScenarioButton2>)
    
    if(this.state.scenario1 && this.state.scenario2){
      return(<div><div style={{position: 'absolute',width: '445px',height: '513px',left: '801px',top: '242px',background: '#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',
    }}>
      <div style={{position:'absolute',left:45+'px',top:50+'px'}}><img src={ProductsList[this.state.scenario1][this.state.scenario2]['pic']} alt='no way' width={350+'px'} height={350+'px'}/></div>
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
        this.state={progress:1,pic:0,picmode:0,peeps1:0,peeps2:0,peeps3:0,peeps4:0,scenario1:0,scenario2:0,portrait:0,style:0}
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
    }
    refresh(){
      this.setState({pic:this.state.pic,picmode:0,peeps1:this.state.peeps4,peeps2:this.state.peeps1,peeps3:this.state.peeps2,peeps4:this.state.peeps3})
    }
    toProgress(a){
        this.setState({progress:a,pic:this.state.pic})
    }
    transpic(pic,picmode){
      this.setState({pic:pic,picmode:picmode,peeps1:svg1,peeps2:svg2,peeps3:svg3,peeps4:svg4})
      //this.props.transpeeps(this.state.peeps1,this.state.peeps2,this.state.peeps3,this.state.peeps4)
}   
transscenario1(num){
  this.setState({pic:this.state.pic,picmode:this.state.picmode,peeps1:this.state.peeps1,peeps2:this.state.peeps2,peeps3:this.state.peeps3,peeps4:this.state.peeps4,scenario1:num,scenario2:0,portrait:0,style:0})
}
transscenario2(num){
  this.setState({pic:this.state.pic,picmode:this.state.picmode,peeps1:this.state.peeps1,peeps2:this.state.peeps2,peeps3:this.state.peeps3,peeps4:this.state.peeps4,scenario1:this.state.scenario1,scenario2:num,portrait:0,style:0})
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
//console.log(this.state.style)
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
        <UploadBroad transpic={this.transpic} pic={this.state.pic} picmode={this.state.picmode}></UploadBroad>
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
      </div>)
  }else{
    return (
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
          <UploadBroad transpic={this.transpic} pic={this.state.pic} picmode={this.state.picmode}></UploadBroad>
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
      </div>)
  } 
  }
  else if(this.state.progress===2){
    if(this.state.portrait && this.state.scenario1 && this.state.scenario2){
      return (
        <div className="backbroad" >
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
        
        </div>)
    }
    return (
      <div className="backbroad" >
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
      </div>)}
    else if(this.state.progress===3){
      if(this.state.style){
        return (
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
    <StyleBar peeps={this.state.peeps1} transtyle={this.transtyle} style={this.state.style} portrait={this.state.portrait} scenario1={this.state.scenario1} scenario2={this.state.scenario2}></StyleBar>
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
          </div>)
      }
      return (
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
  <StyleBar peeps={this.state.peeps1} transtyle={this.transtyle} style={this.state.style} portrait={this.state.portrait} scenario1={this.state.scenario1} scenario2={this.state.scenario2}></StyleBar>
          <div onClick={(()=>{this.toProgress(2)})}><div className='backButton1Text'>Back</div><BackButton1></BackButton1></div>
          
          </div>
        </div>)
    }
  }

  
}

