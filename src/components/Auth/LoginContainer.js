import React, {Component} from 'react';
import Login from './Login';
import {connect} from "react-redux";

import auth from '../../reducers/auth';
import {login} from "../../actions/auth";
import {Link, Redirect} from "react-router-dom";
import PlayerContainer from "../Player/PlayerContainer";


class LoginContainer extends Component{

  submit = values =>{
    this.props.login(values);
  };

  render(){
    return (
      <div className={`login-container`}>
          {!this.props.auth.isAuthenticated && <Login onSubmit={this.submit}/>}
          {this.props.auth.isAuthenticated &&  <Redirect to={'/'}/>}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    auth: store.auth
  }
};

export default connect(mapStateToProps, {login})(LoginContainer);