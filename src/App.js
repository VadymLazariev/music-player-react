import React, {Component} from 'react';
import './App.css';
import {applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './components/Player/reducers/index';
import {Provider} from "react-redux";
import PlayerContainer from './components/Player/PlayerContainer'
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Login from './components/Auth/Login';
import AuthContainer from "./components/Auth/AuthContainer";
import Registration from "./components/Auth/Registration";
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
          <Route exec path='/registration' component={Registration}/>
          <Route exec path='/login' component={AuthContainer}/>
          <Route exec path='/' render={ ()=> (<PlayerContainer/>)}/>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
