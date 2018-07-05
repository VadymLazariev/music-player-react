import React, { Component } from 'react';
import './App.css';
import Player from "./components/Player";
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <div>
          <Player/>
        </div>
        </Provider>
      );
  }
}

export default App;
