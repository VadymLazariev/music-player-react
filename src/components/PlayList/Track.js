import React from 'react';
import './track.css';
import {formatTime} from "../../utils/utils";
import PropTypes from 'prop-types';
import PlayList from "./PlayList";

function Track(props) {
  const {isSelected, clickHandler, index, title_short, duration,onClickRemove} = props;
  return (
    <div>
    <li className={isSelected ? `active-song` : ``} onClick={clickHandler}>
      {index + 1 + ' . '}{title_short} {formatTime(duration)}
    </li>
      <button onClick={onClickRemove}>remove</button>
    </div>
  );
}

Track.propTypes = {
  isSelected:PropTypes.bool,
  clickHandler:PropTypes.func,
  index:PropTypes.number,
  title_short:PropTypes.string,
  duration:PropTypes.number,
  onClickRemove:PropTypes.func
};
export default Track;