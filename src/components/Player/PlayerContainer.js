import Player from './Player';
import React, {Component} from 'react';
import Playlist from '../PlayList/PlayList';
import './player.css';
import Track from "../PlayList/Track";
import TrackInfo from './TrackInfo';
import ControlsContainer from "../Controls/ControlsContainer";
import PlayerControl from "../Controls/PlayerControl";
import ProgressBarControl from '../Controls/ProgressBarControl';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import {getPlayList, play, pause, selectTrack} from "./actions/index";
import SubControlContainer from "../Controls/SubControlContainer";
import ImageComponent from "./ImageComponent";
import {BrowserRouter, Link, Route} from 'react-router-dom'

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio();
  }
  componentDidMount() {
    this.props.getPlayList();
  }
  activateTrack = (index) => {
    this.props.selectTrack(index);
    this.audio.src = this.props.playlist.playList[index].preview;
    this.audio.play();
  };
  next = () => {
    const {isRepeating, index, playList} = this.props.playlist;
    const nextIndex = isRepeating ? index : index < playList.length - 1 ? index + 1 : 0;
    this.activateTrack(nextIndex);
    this.audio.src = this.props.playlist.playList[nextIndex].preview;
    this.audio.play();
  };
  prev = () => {
    const {index, playList} = this.props.playlist;
    const prevIndex = index > 0 ? index - 1 : playList.length - 1;
    this.activateTrack(prevIndex);
    this.audio.src = this.props.playlist.playList[prevIndex].preview;
    this.audio.play();
  };
  play = () => {
    this.props.play();
    this.audio.play();
  };
  pause = () => {
    this.props.pause();
    this.audio.pause();
  };
  togglePlaying = () => {
    if (!this.audio.src) {
      this.audio.src = this.props.playlist.playList[0].preview;
    }
    this.props.playlist.isPlaying ? this.pause() : this.play();
  };
  render() {
    if (this.props.playlist.isLoading) {
      return null
    }
    if (!this.props.playlist.playList.length) {
      return null;
    }
    console.log(this.props.playlist.index);
    return (
      <main className={`player-container `}>
        <div className={`player `}>
          <ImageComponent img={this.props.playlist.currentTrack.album.cover_medium}/>
          <div className={`player__header`}>
            <p><Link target="_blank" to={`/login`}>login</Link></p>
          </div>
          <div className={`player__track-management`}>
            <Player>
              <TrackInfo title={this.props.playlist.currentTrack.title}
                         name={this.props.playlist.currentTrack.artist.name}/>
              <ProgressBarControl/>
              <ControlsContainer>
                <PlayerControl handleClick={this.prev} controlType={`control__change-song`}
                               fontAwesome={`fa fa-backward`}/>
                <PlayerControl handleClick={this.togglePlaying}
                               controlType={`control__play`}
                               fontAwesome={!this.props.playlist.isPlaying ?
                                 ` fa fa-play-circle` : `fa fa-pause-circle`}/>
                <PlayerControl handleClick={this.next} controlType={`control__change-song`}
                               fontAwesome={`fa fa-forward`}/>
              </ControlsContainer>
              <SubControlContainer>
                <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-volume-up`}/>
                <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-random`}/>
                <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-repeat`}/>
                <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-heart`}/>
              </SubControlContainer>
            </Player>
          </div>
        </div>
        <Playlist currentSongIndex={this.props.playlist.index} handleClick={this.activateTrack}
                  tracks={this.props.playlist.playList}/>
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

export default connect(mapStateToProps, {getPlayList, play, pause, selectTrack})(PlayerContainer);