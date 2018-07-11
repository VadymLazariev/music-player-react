import React, {Component} from 'react';
import './track.css';
import {formatTime} from "../../utils/utils";


function Track(props) {
  const {isSelected, clickHandler, index, title_short, duration} = props;
  let isActivated = true;
  return (
    <li className={isSelected ? `active-song` : ``} onClick={clickHandler}>
      {index + 1 + ' . '}{title_short} {formatTime(duration)}
    </li>
  );
}

export default Track;