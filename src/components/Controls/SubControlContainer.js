import React, {Component} from 'react';
import './subControlCss.css';

function SubControlContainer(props) {
  return (
    <div className={`sub-controls`}>
      {props.children}
    </div>
  );
}

export default SubControlContainer;