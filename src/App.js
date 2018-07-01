import React, { Component } from 'react';
import './App.css';
import SongList from './components/songList/songList'
import Song from "./components/song/song";
import Player from "./components/player";

class App extends Component {
  render() {
    return (
      <div>
        <Player/>
      </div>
    );
  }
}

export default App;
