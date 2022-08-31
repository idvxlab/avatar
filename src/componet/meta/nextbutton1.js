import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'
export default class NextButton1 extends Component {
    constructor(props){
        super(props)
        this.state={c:this.props.c}
    }
    render() {
        if(this.props.c=='b'){
            return (<div className='nextButton1' style={{position:'absolute',left:917+'px',top:796+'px'}}><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.752 26.356H37.2432" stroke="#4D59BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32.0869 20.6265L37.2435 26.356L32.0869 32.0856" stroke="#4D59BF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="26" cy="26" r="24.4078" stroke="#4D59BF" strokeWidth="3.18447"/>
        </svg>
        </div>)
        }
        else if(this.props.c=='g'){
            return (<div className='nextButton1' style={{position:'absolute',left:917+'px',top:796+'px'}}><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.752 26.356H37.2432" stroke="#929292" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32.0869 20.6265L37.2435 26.356L32.0869 32.0856" stroke="#929292" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="26" cy="26" r="24.4078" stroke="#929292" strokeWidth="3.18447"/>
        </svg>
        </div>)
        }
        
    }
    
  }