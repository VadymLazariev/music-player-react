import React, {Component} from 'react';
import './track.css';
import {formatTime} from "../../utils/utils";


function Track(props) {
  const {isSelected, clickHandler, index, title_short, duration,onClickRemove,onClickAdd} = props;
  return (
    <li className={isSelected ? `active-song` : ``} onClick={clickHandler}>
      {index + 1 + ' . '}{title_short} {formatTime(duration)} <button onClick={onClickRemove}>remove</button>
    </li>
  );
}

export default Track;