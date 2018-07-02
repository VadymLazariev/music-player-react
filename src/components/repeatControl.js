import React,{Component} from 'react'

export default class RepeatControl extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button className={`btn btn-default`} onClick={this.props.repeat}>repeat</button>
        );
    }
}