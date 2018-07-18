import React from 'react';
import Track from './Track';
import './playList.css';
import PropTypes from 'prop-types';

function PlayList(props) {
  const {handleClick, currentSongIndex, tracks, handleRemoveOnClick, isSearch} = props;
  return (
    <div className={isSearch ? `hide` : `playlist-container`}>
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
                clickHandler={() => handleClick(index)}
                onClickRemove={() => handleRemoveOnClick(currentSongIndex)}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

PlayList.propTypes = {
  handleClick: PropTypes.func,
  currentSongIndex: PropTypes.number,
  tracks: PropTypes.array,
  isSelected: PropTypes.bool
};

export default PlayList;