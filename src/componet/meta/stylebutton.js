import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'

export default class StyleButton extends Component {
    constructor(props){
        super(props)
        this.state={text:this.props.text,x:this.props.x,y:this.props.y,style:this.props.style,l:this.props.l,n:this.props.n,t:this.props.t}        
    }
    static getDerivedStateFromProps(props, state) {
        return {text:props.text,x:props.x,y:props.y ,style:props.style,l:props.l,n:props.n,t:props.t} ;
      }
render(){
    if(this.state.style===1){
            return(
                <div onClick={()=>{this.props.transtyle(this.props.id)}}>
                    <div style={{/* Rectangle 75 */boxSizing: 'border-box',position: 'absolute',width: this.state.l+'px',height: this.state.n+'px',left: this.state.x+'px',top: this.state.y+'px',background: '#4D59BF',border: '2px solid #4D59BF'}}>
                        <div style={{fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '24px',lineHeight: '36px',color: '#FFFFFF',position:'absolute',left:0,top:this.state.t,width:'100%',textAlign:'center'}}>
                            {this.state.text}
                        </div>
                    </div>
                </div>)
        }
        return( <div onClick={()=>{this.props.transtyle(this.props.id)}}>
                    <div style={{/* Rectangle 75 */boxSizing: 'border-box',position: 'absolute',width: this.state.l+'px',height: this.state.n+'px',left: this.state.x+'px',top: this.state.y+'px',border: '2px solid #4D59BF'}}>
                        <div style={{fontFamily: 'Poppins',fontStyle: 'normal',fontWeight: '500',fontSize: '24px',lineHeight: '36px',color: '#4D59BF',position:'absolute',left:0,top:this.state.t,width:'100%',textAlign:'center'}}>
                            {this.state.text}
                        </div>
                    </div>
                </div>)
        
}
}
/*




box-sizing: border-box;

position: absolute;
width: 159px;
height: 58px;
left: 353px;
top: 327px;




*/