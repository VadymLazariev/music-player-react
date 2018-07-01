import React,{Component} from 'react'

export default class RepeatControl extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button onClick={this.props.repeat}>repeat</button>
        );
    }
}