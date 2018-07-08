import React,{Component} from 'react'

import  {UlStyled} from "./PlaylistStyles";
import  {LiStyled} from "./PlaylistStyles";

export default class Playlist extends Component{

    render(){
        let isActive = false;
        return(
            this.props.tracks.map((track,index) => (
                isActive = (this.props.currentTrackId === index),
                   <UlStyled  key={track.id}>
                        <LiStyled  onClick={() => {this.props.playSong(index)}}>
                              {index+1+`.`}{track.artist.name} - {track.title}
                        </LiStyled>
                    </UlStyled>

            ))
        )
    };
}