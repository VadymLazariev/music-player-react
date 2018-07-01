import React,{Component} from 'react'

export default class NextTrackControl extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick={this.props.next}>next</button>
        );
    }
}