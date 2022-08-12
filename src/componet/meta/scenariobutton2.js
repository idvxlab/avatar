import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'

export default class ScenarioButton2 extends Component {
    constructor(props){
        super(props)
        this.state={
            head:this.props.head,peeps:this.props.peeps,
            x:this.props.x,y:this.props.y,style:this.props.style,
            l:this.props.l,E:this.props.E,
            headp:this.props.headp,
            //  x,y,l,m
            peepsp:this.props.peepsp}        
    }
    static getDerivedStateFromProps(props, state) {
        return {peeps:props.peeps,x:props.x,y:props.y ,style:props.style,l:props.l,E:props.E} ;
      }
render(){
    if(this.state.peeps){
        if(this.state.style===1){
            return(
<div onClick={()=>{this.props.transscenario2(this.props.id)}}><div style={{border: '3px solid #4D59BF',/* Rectangle 41 */
        position: 'absolute',width: this.state.l-6+'px',height:this.state.l-6+'px',left: this.state.x+'px',top: this.state.y+'px',background:'#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',}}>
            <div style={{position:'absolute',left:this.state.l*this.state.headp[0]-3,top:this.state.l*this.state.headp[1]-3}}>
                
                <img style={{position:'absolute',left:-3,top:-3}} src={this.state.head}  width={this.state.l*this.state.headp[2]} height={this.state.l*this.state.headp[3]}/>
            </div>
            
            <div style={{position:'absolute',left:this.state.l*this.state.peepsp[0]-3,top:this.state.l*this.state.peepsp[1]-3}}>
                
                <img style={{position:'absolute',left:-3,top:-3}} src={this.state.peeps}  width={this.state.l*this.state.peepsp[2]} height={this.state.l*this.state.peepsp[3]}/>
            </div>
            
            </div></div>)
        }
        return(<div onClick={()=>{this.props.transscenario2(this.props.id)}}><div style={{/* Rectangle 41 */
        position: 'absolute',width: this.state.l+'px',height:this.state.l+'px',left: this.state.x+'px',top: this.state.y+'px',background:'#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',}}>
            <div style={{position:'absolute',left:this.state.l*this.state.headp[0]-3,top:this.state.l*this.state.headp[1]-3}}>
                <img src={this.state.head}  width={this.state.l*this.state.headp[2]} height={this.state.l*this.state.headp[3]}/>
            </div>
            
            <div style={{position:'absolute',left:this.state.l*this.state.peepsp[0]-3,top:this.state.l*this.state.peepsp[1]-3}}>    
                <img src={this.state.peeps}  width={this.state.l*this.state.peepsp[2]} height={this.state.l*this.state.peepsp[3]}/>
            </div>

            </div></div>)
        
}
else{
    if(this.state.style===1){
        if(this.state.E==1){<div><div style={{/* Rectangle 41 */border: '3px solid #4D59BF',
        position: 'absolute',width: this.state.l+'px',height:this.state.l+'px',top: this.state.y+'px',background:'#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',}}>
        <div style={{position:'absolute',left:40,top:64}}> <svg width="131" height="95" viewBox="0 0 131 95" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M104.934 0.0940696L105.097 0L130.49 43.9817L104.934 58.7363V95H26.752V59.7783L0 43.0871L26.752 0.210088V0H41.8691C47.2348 7.43424 55.9735 12.2728 65.8423 12.2728C75.7112 12.2728 84.4499 7.43424 89.8156 0H104.934V0.0940696Z" fill="#F3F3F3"/>
    </svg>
    </div>
        </div></div>}
        else{
            <div><div style={{/* Rectangle 41 */border: '3px solid #4D59BF',
    position: 'absolute',width: this.state.l+'px',height:this.state.l+'px',top: this.state.y+'px',background:'#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',}}>
    </div></div>
        }   
    }
    if(this.state.E===1){return(<div><div style={{/* Rectangle 41 */
    position: 'absolute',width: this.state.l+'px',height:this.state.l+'px',left: this.state.x+'px',top: this.state.y+'px',background:'#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',}}>
    <div style={{position:'absolute',left:40,top:64}}> <svg width="131" height="95" viewBox="0 0 131 95" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M104.934 0.0940696L105.097 0L130.49 43.9817L104.934 58.7363V95H26.752V59.7783L0 43.0871L26.752 0.210088V0H41.8691C47.2348 7.43424 55.9735 12.2728 65.8423 12.2728C75.7112 12.2728 84.4499 7.43424 89.8156 0H104.934V0.0940696Z" fill="#F3F3F3"/>
</svg>
</div>
    </div></div>)}
    return(<div><div style={{/* Rectangle 41 */
    position: 'absolute',width: this.state.l+'px',height:this.state.l+'px',left: this.state.x+'px',top: this.state.y+'px',background:'#FFFFFF',boxShadow: '0px 4px 9px rgba(0, 0, 0, 0.04)',}}>
    
    </div></div>)
    
}
    
}}