import React, {Component} from 'react';
import './App.css';
import Player from "./components/Player";
import {applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {Provider} from "react-redux";
import PlayerContainer from './components/Player/PlayerContainer'
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Login from './components/Auth/Login';
const store = createStore(rootReducer, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Route exec path='/login' component={Login}/>
          <Route exec path='/' render={ ()=> (<PlayerContainer/>)}/>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
