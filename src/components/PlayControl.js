import React,{Component} from 'react';
import  {ButtonPlay} from  './PlayControlStyles';

import './shared-styles.css';

export default class PlayControl extends  Component{
    render(){
        return(
            <ButtonPlay className={`button`} onClick={ () => {this.props.togglePlay()}}
                        type={`button`} className={`btn btn-default`}></ButtonPlay>
        );
    }
}