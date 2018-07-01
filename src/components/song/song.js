import  React,{Component} from 'react'
import './song.css'


export default function Song (props) {
   const {
        id,
        artist,
        title_short,
        clickHandler,
        preview,
        isActive,
    } = props;

    const onClick = id => {
        return () =>{
            clickHandler(id);
        }
    };

    return(
        <div>
            <p onClick={onClick(id)} className={ `song ${ isActive? "active" : ""}`}>
                    {artist} - {title_short}
                    </p>
            <hr/>
        </div>
    );



}

/*
export  default class Song extends  Component{
    constructor(props){
        super(props);
        this.id = null;
        this.artist = '';
        this.title_short = '';
        this.preview = '';
        this.clickHandler = null;
        this.state={active:false};
    }
    toggleClass(){
        this.setState({active: !this.state.active});
    }

    onClick = id => {
        this.toggleClass();
        return () =>{
            this.clickHandler(id);
        }
    }

    render(){
        return(
            <div>
                <p onClick={this.onClick(this.id)} className={ `song ${this.state.active? "active" : ""}`}>
                    {this.artist} - {this.title_short}
                </p>
                <hr/>
            </div>
        );
    }
}*/
