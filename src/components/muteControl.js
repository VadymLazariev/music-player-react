import React,{Component} from 'react'

export default class  MuteControl extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button  className={`btn btn-default`} onClick={this.props.mute}>mute</button>
        );
    }
}