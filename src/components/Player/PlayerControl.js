import React, {Component} from 'react';
import './playerControl.css';

function PlayerControl(props) {
  return (
    <button onClick={props.handleClick} className={`button ${props.controlType}`} type={`button`}>
      <i className={`${props.fontAwesome}`}></i>
    </button>
  );
}

export default PlayerControl;