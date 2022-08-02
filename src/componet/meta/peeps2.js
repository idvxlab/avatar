import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'

export default class Peeps1 extends Component {
    constructor(props){
        super(props)
        this.state={peeps:this.props.peeps,x:this.props.x,picx:this.props.picx }        
    }
    static getDerivedStateFromProps(props, state) {
        return {peeps:props.peeps,x:props.x,picx:props.picx } ;
      }
render(){
    if(this.state.peeps){
        return(<div onClick={this.props.onClick}><div style={{/* Rectangle 41 */
        position: 'absolute',width: this.state.x[2]+'px',height:this.state.x[3]+'px',left: this.state.x[0]+'px',top: this.state.x[1]+'px',background:'#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',}}>
            <div style={{position:'absolute',left:this.state.picx[0],top:this.state.picx[1]}}><img src={this.state.peeps}  width={this.state.picx[2]} height={this.state.picx[3]}/></div></div></div>)
        
}
else{
    return(<div><div style={{/* Rectangle 41 */
position: 'absolute',width: this.state.x[2]+'px',height:this.state.x[3]+'px',left: this.state.x[0]+'px',top: this.state.x[1]+'px',background:'#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',}}></div></div>)
}
    
}}