import React, {Component} from 'react';
import './App.css';
import {applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {Provider} from "react-redux";
import PlayerContainer from './components/Player/PlayerContainer'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import LoginContainer from  './components/Auth/LoginContainer';
import PrivateRoute from "./components/AuthGuard/AuthGuard";
import httpServer from './interceptor';

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
          <Switch>
            <Switch>
              <Route path="/login" component={LoginContainer}/>
              <PrivateRoute path="/" component={PlayerContainer} />
            </Switch>
          </Switch>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
httpServer.setupInterceptors(store);