import React,{Component} from 'react'
import './playlist.css'

export default class Playlist extends Component{

    render(){
        let isActive = false;
        return(
            this.props.tracks.map((track,index) => (
                isActive = (this.props.currentTrackId === index),
                <div className={`playlist-container`}>
                   <ul>
                        <li   onClick={ () => {this.props.playSong(index)}} key={track.id}
                              className={`  playlist__item   ${isActive? "active" : ' '}`}>
                            <span> {index+1+`.`}{track.artist.name} - {track.title}  </span>
                        </li>
                    </ul>
                </div>
            ))
        )
    };
}