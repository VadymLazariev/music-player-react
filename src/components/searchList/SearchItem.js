import React, {Component} from 'react';
import './searchItem.css';
import {formatTime} from "../../utils/utils";


function SearchListItem(props) {

  const {id ,playlist,isSelected, isAdded,clickHandler, index, title_short, duration,onClickAdd} = props;
  return (
    <div>
      <p>{console.log(isAdded)}</p>
    <li className={isSelected ? `active-song` : ``} onClick={ () => {clickHandler(index)}}>
      {index + 1 + ' . '}{title_short} {formatTime(duration)}
    </li>
      <button onClick={onClickAdd}>
        { isAdded ? `added` : `add`}</button>
    </div>
  );
}

export default SearchListItem;