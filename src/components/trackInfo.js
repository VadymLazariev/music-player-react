import React,{Component} from 'react'

export default  class TrackInfo extends  Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h4>{this.props.name} - {this.props.title_short}</h4>
        );
    };
}