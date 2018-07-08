import Player from './Player';
import React, {Component} from 'react';
import Playlist from '../PlayList/PlayList';
import './player.css';
import Track from "../PlayList/Track";
import TrackInfo from './TrackInfo';
import ControlsContainer from "./ControlsContainer";
import PlayerControl from "./PlayerControl";
import ProgressBarControl from './ProgressBarControl';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import {getPlayList,play,pause,selectTrack} from "../../actions";
import SubControlContainer from "./SubControlContainer";
import ImageComponent from "./ImageComponent";
import {BrowserRouter,Link,Route} from 'react-router-dom'
class PlayerContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlayList();
  }

  play = () =>{

  };

  render() {
    if (this.props.playlist.isLoading) {
      return null
    }
    if (!this.props.playlist.playList.length) {
      return null;
    }
    const {play,pause,isPlaying} = this.props.player;

    return (
       <main className={`player-container `}>
         <div className={`player `}>
           <ImageComponent img={this.props.playlist.currentTrack.album.cover_medium}/>
           <div className={`player__header`}>
             <p><Link target="_blank" to={`/login`}>login</Link></p>
           </div>
           <div className={`player__track-management`}>
             <Player>
               <TrackInfo title={this.props.playlist.currentTrack.title} name={this.props.playlist.currentTrack.artist.name}/>
               <ProgressBarControl/>
               <ControlsContainer>
                 <PlayerControl controlType={`control__change-song`} fontAwesome={`fa fa-backward`}/>
                 <PlayerControl handleClick={!isPlaying ? this.play :this.props.pause} controlType={`control__play`} fontAwesome={ !isPlaying ?` fa fa-play-circle`: `fa fa-pause-circle` }/>
                 <PlayerControl controlType={`control__change-song`} fontAwesome={`fa fa-forward`}/>
               </ControlsContainer>
               <SubControlContainer>
                 <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-volume-up`}/>
                 <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-random` }/>
                 <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-repeat`}/>
                 <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-heart`}/>
               </SubControlContainer>
             </Player>
           </div>
         </div>
         <Playlist  onClick={selectTrack} tracks={this.props.playlist.playList}/>
       </main>
    )
  } ;
}

const mapStateToProps = store => {
  return {
    playlist: store.playlist,
    player: store.player
  };
};

export default connect(mapStateToProps, {getPlayList,play,pause,selectTrack})(PlayerContainer);