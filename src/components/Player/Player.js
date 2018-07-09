import React, {Component} from 'react';
import './player.css'

function Player(props) {
  return (
    <main>
      {props.children}
    </main>
  );
}

export default Player;