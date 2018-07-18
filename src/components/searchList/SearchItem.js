import React from 'react';
import './searchItem.css';
import {formatTime} from "../../utils/utils";


function SearchListItem(props) {
  const {id, playlist, isSelected, clickHandler, index, title_short, duration, onClickAdd} = props;

  const checkAddedTrack = () => {
    let isTrackAdded = false;
    playlist.map(track => {
      if (track.id === id) {
        isTrackAdded = true;
      }
    });
    return isTrackAdded;
  };
  return (
    <div>
      <li className={isSelected ? `active-song` : ``} onClick={() => {
        clickHandler(index)
      }}>
        {index + 1 + ' . '}{title_short} {formatTime(duration)}
      </li>
      <button disabled={checkAddedTrack()} onClick={onClickAdd}>
        <i className={!checkAddedTrack() ? `fa fa-plus` : `fa fa-minus`}></i>
      </button>
    </div>
  );
}

export default SearchListItem;