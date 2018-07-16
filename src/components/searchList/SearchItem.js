import React, {Component} from 'react';
import './searchItem.css';
import {formatTime} from "../../utils/utils";


function SearchListItem(props) {

  const {isSelected,clickHandler, index, title_short, duration,onClickAdd} = props;
  return (
    <div>
    <li className={isSelected ? `active-song` : ``} onClick={ () => {clickHandler(index)}}>
      {index + 1 + ' . '}{title_short} {formatTime(duration)}
    </li>
      <button onClick={onClickAdd}> Add </button>
    </div>
  );
}

export default SearchListItem;