import React,{Component} from 'react'

export default class PlayControl extends  Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={ () => {this.props.togglePlay()}} type={`button`} className={`btn btn-default`}>
                {this.props.isPlay ? "Pause" : "Play"}</button>
        );
    }
}