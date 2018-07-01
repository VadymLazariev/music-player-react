import  React,{Component} from 'react'

export default  class PrevTrackControl extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.prev} >prev</button>
        );
    }
}