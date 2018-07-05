import React,{Component} from 'react'
import {PlayerProgressContainerStyled} from './ProgressBarStyles'
import {PlayerProgressValueStyled} from './ProgressBarStyles'

export default class ProgressBarControl extends  Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <PlayerProgressContainerStyled  onClick={e => this.props.setProgress(e)}>
                <PlayerProgressValueStyled  style={{width: this.props.progress + '%'}}>
                </PlayerProgressValueStyled>
            </PlayerProgressContainerStyled>
        );
    }

}