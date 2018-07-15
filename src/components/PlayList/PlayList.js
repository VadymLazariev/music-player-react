import React, {Component} from 'react';
import Track from './Track';
import './playList.css';
import PropTypes from 'prop-types';



function PlayList(props) {
  const {handleClick,currentSongIndex,tracks,handleRemoveOnClick,handleAddOnClick} = props;
  return (
    <div className="playlist-container">
      <div className="playlist">
        <ul>
          {
            tracks.map((track, index) => (
              <Track
                isSelected={index === currentSongIndex}
                index={index}
                key={track.id}
                id={track.id}
                title_short={track.title}
                duration={track.duration}
                clickHandler={ () => handleClick(index)}
                onClickRemove={ () => handleRemoveOnClick(currentSongIndex)}
                onClickAdd = { () => handleAddOnClick(track)}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

PlayList.propTypes ={
  handleClick: PropTypes.func,
  currentSongIndex: PropTypes.number,
  tracks: PropTypes.array,
  isSelected: PropTypes.bool
};

export default PlayList;