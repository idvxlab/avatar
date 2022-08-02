import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'

export default class Peeps1 extends Component {
    constructor(props){
        super(props)
        this.state={peeps:this.props.peeps}   
        this.download=this.download.bind(this)     
    }
    static getDerivedStateFromProps(props, state) {
        return {peeps:props.peeps};
      }
    download(){
        if(this.state.peeps){const a_link = document.createElement('a');
    fetch(this.state.peeps)    // 括号里是文件链接
    .then((res) => res.blob())
     .then((blob) => {
          // 将链接地址字符内容转变成blob地址
       a_link.href = URL.createObjectURL(blob);
       //console.log(a_link.href);
       a_link.download = 'a'; //下载的文件的名字
       document.body.appendChild(a_link);
       a_link.click();
   });}
        
//https://blog.csdn.net/qq_42381128/article/details/122554481
    }
render(){
    if(this.state.peeps){
    return (<div>
        <div style={{position: 'absolute',width: '498px',height: '509px',left: '654px',top: '244px',background: '#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)'
}}></div>
<div style={{position:'absolute',top:295,left:721}}><img src={this.state.peeps} width={400} height={400}/></div>

    <div onClick={this.download} style={{/* Rectangle 60 */boxSizing: 'border-box',position: 'absolute',width: '263px',height: '58px',left: '781px',top: '667px',border: '2px solid #4D59BF',
}}><div style={{/* download svg */
position: 'absolute',
width: '171px',
height: '36px',
left: '49px',
top: '11px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '24px',lineHeight:'36px',color: '#4D59BF'
}}>download svg</div></div>
    </div>)
}
else{
    return(<div>
        <div style={{position: 'absolute',width: '498px',height: '509px',left: '654px',top: '244px',background: '#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)'
}}></div>

<svg width="350" height="195" transform='translate(741,357)' fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="62.6971" cy="141.623" r="52.3709" fill="#F3F3F3"/>
<circle cx="139.41" cy="126.87" r="52.3709" fill="#F3F3F3"/>
<circle cx="250.053" cy="120.232" r="73.7619" fill="#F3F3F3"/>
<circle cx="160.432" cy="31.3488" r="31.3488" fill="#D9D9D9"/>
<path d="M212.374 193.994H116.316C107.48 193.994 100.286 186.844 100.836 178.025C103.651 132.955 118.624 65.6479 163.346 65.6479C207.976 65.6479 224.174 132.68 227.835 177.748C228.56 186.667 221.322 193.994 212.374 193.994Z" fill="#D9D9D9"/>
<path d="M350 194.731H0C16.3505 173.832 73.8356 133.14 172.972 137.566C272.107 141.992 332.297 177.52 350 194.731Z" fill="#F3F3F3"/>
</svg>

    <div style={{/* Rectangle 60 */boxSizing: 'border-box',position: 'absolute',width: '263px',height: '58px',left: '781px',top: '667px',border: '2px solid #4D59BF',
}} ><div style={{/* download svg */
position: 'absolute',
width: '171px',
height: '36px',
left: '49px',
top: '11px',fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '24px',lineHeight:'36px',color: '#4D59BF'
}}>download svg</div></div>
    </div>)
}
    
}}