import React from 'react';
import './searchItem.css';
import {formatTime} from "../../utils/utils";
import PropTypes from 'prop-types';
import PlayList from "../PlayList/PlayList";

function SearchListItem(props) {
  const {id, playlist, isSelected, clickHandler, index, title_short, duration, onClickAdd} = props;
  const checkAddedTrack = () => playlist.some(track => track.id === id);
  return (
    <div>
      <li className={isSelected ? `active-song` : ``} onClick={() => {
        clickHandler(index)
      }}>
        {index + 1 + ' . '}{title_short} {formatTime(duration)}
      </li>
      <button disabled={checkAddedTrack()} onClick={onClickAdd}>
        <i className={!checkAddedTrack() ? `fa fa-plus` : `fa fa-minus`}> </i>
      </button>
    </div>
  );
}

SearchListItem.propTypes = {
  id: PropTypes.number,
  playlist: PropTypes.array,
  isSelected: PropTypes.bool,
  clickHandler: PropTypes.func,
  index: PropTypes.number,
  title_short: PropTypes.string,
  duration: PropTypes.number,
  onClickAdd: PropTypes.func,
};


export default SearchListItem;