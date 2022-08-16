import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'
import './loading.css'
export default class Loading extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='loading' style={{display:'none'}}>
        <div className='loadingpage'>
            
</div>
<div className="box">
    <div className="r1"></div>
    <div className="r2"></div>
    <div className="r3"></div>
    <div className="r4"></div>
    <div className="r5"></div>
    <p>loading...</p>
        </div>
        </div>)
    }
    
  }