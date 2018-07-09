import React, {Component} from 'react';
import Track from './Track';
import './playList.css';
import PropTypes from 'prop-types';
function clickHandler(e){
  e.preventDefault();
  console.log('clicked')
}
function PlayList(props) {
  const {i,handleClick,currentSongIndex,tracks,isSelected,} = props;
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
                clickHandler={ () => handleClick(index)}
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