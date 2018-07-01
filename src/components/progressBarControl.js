import React,{Component} from 'react'
import './playlist.css'
export default class ProgressBarControl extends  Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="player-progress-container" onClick={e => this.props.setProgress(e)}>
                <span className="player-progress-value" style={{width: this.props.progress + '%'}}></span>
            </div>
        );
    }

}