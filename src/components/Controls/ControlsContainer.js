import React, {Component} from 'react';
import './controlsContainer.css';

function ControlsContainer(props) {
  return (
    <div className={`controls-container`}>
      {props.children}
    </div>
  );
}

export default ControlsContainer;