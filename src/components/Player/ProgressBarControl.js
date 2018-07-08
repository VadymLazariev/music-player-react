import React, {Component} from 'react';
import './progressBar.css';

function ProgressBarControl(props) {
  return (
    <div className="progress-container">
      <span className="progress-value" onClick={props.handleClick} ></span>
    </div>
  );
}

export default ProgressBarControl;