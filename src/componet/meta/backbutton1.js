import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'
export default class BackButton1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (<div className='nextButton1' style={{position:'absolute',left:549+'px',top:797+'px'}}>
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.248 25.644L14.7568 25.644" stroke="#4D59BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9131 31.3735L14.7565 25.644L19.9131 19.9144" stroke="#4D59BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="26" cy="26" r="24.4078" transform="rotate(-180 26 26)" stroke="#4D59BF" strokeWidth="3.18447"/>
</svg>

        </div>)
    }
    
  }