import React,{Component} from 'react' 
import '../../font/Cabin,Poppins/index.css'
import './loading.css'
export default class Loading extends Component {
    constructor(props){
        super(props)
        this.setState({x:this.props.x,y:this.props.y})
    }
    render() {
        return (<div className='box' style={{position: 'absolute',left:this.props.x,top:this.props.y,
            width: 50,
            height: 60,
            margin: '100 auto'
        }}>
        <div className="r1"></div>
        <div className="r2"></div>
        <div className="r3"></div>
        <div className="r4"></div>
        <div className="r5"></div>
        <p>loading...</p>
    </div>)
    }
    
  }