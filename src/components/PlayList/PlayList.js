import React, {Component} from 'react';
import Track from './Track';
import './playList.css';

function PlayList(props) {
  const {currentSongIndex,tracks,isSelected,clickHandler} = props;
  return (
    <div className="playlist-container">
      <div className="playlist">
        <ul>
          {
            tracks.map((track, index) => (
              <Track
                isSelected={isSelected}
                index={index}
                key={track.id}
                id={track.id}
                title_short={track.title}
                duration={track.duration}
                onClick={clickHandler}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default PlayList;