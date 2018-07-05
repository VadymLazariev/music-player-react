import React,{Component} from 'react'
import {PlayerSongInfo} from './TrackInfoStyles'
import {PlayerSongName} from './TrackInfoStyles'
import {PlayerBandName} from './TrackInfoStyles'
export default  class TrackInfo extends  Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <PlayerSongInfo className="player__song-info">
                <PlayerSongName className="player__band-name">Eminem</PlayerSongName>
                <PlayerBandName className="player__song-name">Scary Movies</PlayerBandName>
            </PlayerSongInfo>
        );
    };
}