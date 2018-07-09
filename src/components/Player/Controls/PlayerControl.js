import React, {Component} from 'react';
import './playerControl.css';
import PropTypes from 'prop-types';
import Player from "../Player";

function PlayerControl(props) {
  return (
    <button onClick={props.handleClick} className={`button ${props.controlType}`} type={`button`}>
      <i className={`${props.fontAwesome}`}></i>
    </button>
  );
}

export default PlayerControl;

PlayerControl.propTypes = {
  handleClick: PropTypes.func,
  controlType: PropTypes.string,
  fontAwesome: PropTypes.string,
};