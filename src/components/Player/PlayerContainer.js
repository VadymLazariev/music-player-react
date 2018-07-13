import Player from './Player';
import React, {Component} from 'react';
import Playlist from '../PlayList/PlayList';
import './player.css';
import TrackInfo from './TrackInfo';
import ControlsContainer from "../Controls/ControlsContainer";
import PlayerControl from "../Controls/PlayerControl";
import ProgressBarControl from '../Controls/ProgressBarControl';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux';
import {getPlayList, play, pause, selectTrack, setProgress} from "./actions/index";
import SubControlContainer from "../Controls/SubControlContainer";
import ImageComponent from "./ImageComponent";
import tracks from '../../assets/tracksMock';
import {Link} from 'react-router-dom';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio();

    this.audio.addEventListener('timeupdate', e => {
      this.updateProgress();
    });

    this.audio.addEventListener('ended', e => {
      this.next();
    });
  }

  componentDidMount() {
    this.props.getPlayList();
  }

  setProgress = (e) => {
    const target = e.target.nodeName === "SPAN" ? e.target.parentNode : e.target;
    const width = target.clientWidth;
    const rect = target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const duration = this.audio.duration;
    const currentTime = (duration * offsetX) / width;
    const progress = (currentTime * 100) / duration;
    this.audio.currentTime = currentTime;
    this.props.setProgress(progress);
    this.play();
  };

  updateProgress = () => {
    const progress = (this.audio.currentTime * 100) / this.audio.duration;
    this.props.setProgress(progress)

  };

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
  toggleMute = () => {
    this.audio.muted = !this.audio.muted;
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
    return (
      <main className={`player-container `}>
        <div className={`player `}>
          <ImageComponent img={this.props.playlist.currentTrack.album.cover_medium}/>
          <div className={`player__header`}>
            {/*<p><Link target="_blank" to={`/login`}>login</Link></p>*/}
          </div>
          <div className={`player__track-management`}>
            <Player>
              <TrackInfo title={this.props.playlist.currentTrack.title}
                         name={this.props.playlist.currentTrack.artist.name}/>
              <ProgressBarControl progressOnClick={this.setProgress} progress={this.props.playlist.progress}/>
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
                <PlayerControl handleClick={this.toggleMute}
                               controlType={ `control__small` }
                               fontAwesome={!this.audio.muted ? `fa fa-volume-up` : `fa fa-volume-down`}/>
                <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-random`}/>
                <PlayerControl controlType={`control__small`} fontAwesome={`fa fa-repeat`}/>
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

export default connect(mapStateToProps, {getPlayList, play, pause, selectTrack, setProgress})(PlayerContainer);