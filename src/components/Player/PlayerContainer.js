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
import {
  getPlayList, play, pause, selectTrack, setProgress, removeTrack, addTrack, randomize
} from "../../actions/palyer";
import SubControlContainer from "../Controls/SubControlContainer";
import ImageComponent from "./ImageComponent";
import Search from "./Search";
import SearchList from "../searchList/SearchList";
import PropTypes from 'prop-types';


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
    this.audio.src = this.props.player.userPlayList[index].preview;
    this.audio.play();
  };
  next = () => {
    const {index, userPlayList} = this.props.player;
    const nextIndex = index < userPlayList.length - 1 ? index + 1 : 0;
    this.activateTrack(nextIndex);
    this.audio.src = userPlayList[nextIndex].preview;
    this.audio.play();
  };
  prev = () => {
    const {index, userPlayList} = this.props.player;
    const prevIndex = index > 0 ? index - 1 : userPlayList.length - 1;
    this.activateTrack(prevIndex);
    this.audio.src = userPlayList[prevIndex].preview;
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
  toggleRepeat = () => {
    this.audio.loop = !this.audio.loop;
  };
  togglePlaying = () => {
    if (!this.audio.src) {
      this.audio.src = this.props.player.userPlayList[0].preview;
    }
    this.props.player.isPlaying ? this.pause() : this.play();
  };

  render() {
    const {currentTrack, progress, isPlaying, userPlayList, index} = this.props.player;
    const {searchValue, searchPlayList} = this.props.search;
    return (

      <main className={`player-container `}>
        <div className={`player `}>
          <ImageComponent img={currentTrack.album.cover_medium}/>
          <div className={`player__header`}>
            <Search/>
          </div>
          <div className={`player__track-management`}>
            <Player>
              <TrackInfo title={currentTrack.title}
                         name={currentTrack.artist.name}/>
              <ProgressBarControl progressOnClick={this.setProgress} progress={progress}/>
              <ControlsContainer>
                <PlayerControl handleClick={this.prev} controlType={`control__change-song`}
                               fontAwesome={`fa fa-backward`}/>
                <PlayerControl handleClick={this.togglePlaying}
                               controlType={`control__play`}
                               fontAwesome={!isPlaying ?
                                 ` fa fa-play-circle` : `fa fa-pause-circle`}/>
                <PlayerControl handleClick={this.next} controlType={`control__change-song`}
                               fontAwesome={`fa fa-forward`}/>
              </ControlsContainer>
              <SubControlContainer>
                <PlayerControl handleClick={this.toggleMute}
                               controlType={`control__small`}
                               fontAwesome={!this.audio.muted ? `fa fa-volume-up` : `fa fa-volume-down`}/>
                <PlayerControl handleClick={this.props.randomize} controlType={`control__small`}
                               fontAwesome={`fa fa-random`}/>
                <PlayerControl handleClick={this.toggleRepeat} controlType={`control__small`}
                               fontAwesome={`fa fa-repeat`}/>
              </SubControlContainer>
            </Player>
          </div>
        </div>

        <Playlist isSearch={searchValue} handleClick={this.activateTrack}
                  currentSongIndex={index}
                  handleRemoveOnClick={this.props.removeTrack} tracks={userPlayList}/>

        <SearchList playlist={userPlayList} isSearch={searchValue} handleAddOnClick={this.props.addTrack}
                    tracks={searchValue ? searchPlayList : []}/>
      </main>
    )
  } ;
}

const mapStateToProps = store => {
  return {
    player: store.player,
    search: store.search
  };
};

export default connect(mapStateToProps, {
  getPlayList,
  play,
  pause,
  selectTrack,
  removeTrack,
  setProgress,
  addTrack,
  randomize
})(PlayerContainer);

ImageComponent.propTypes = {
  currentTrack: PropTypes.object,
  progress: PropTypes.number,
  isPlaying: PropTypes.bool,
  userPlayList: PropTypes.array,
  index: PropTypes.number,
  searchValue: PropTypes.string,
  searchPlayList: PropTypes.array
};