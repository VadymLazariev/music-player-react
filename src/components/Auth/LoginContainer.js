import React, {Component} from 'react';
import Login from './Login';
import {connect} from "react-redux";
import {login} from "../../actions/auth";
import {Redirect} from "react-router-dom";

class LoginContainer extends Component {
  submit = values => {
    this.props.login(values);
  };

  render() {
    return (
      <div>
        {!this.props.auth.isAuthenticated && <Login onSubmit={this.submit}/>}
        {this.props.auth.isAuthenticated && <Redirect to={'/'}/>}
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