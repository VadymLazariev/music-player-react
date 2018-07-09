import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './login.css';

class Login extends  Component{
  constructor(props){
    super(props);
    this.state = {login:'', password:''};
  }

  handleEmail(event){
    this.setState({login: event.target.value});
  }
  handlePassword(event){
    this.setState({password: event.target.value});
  }

  render(){
  return(
    <div className={`form-container`}>
    <form action="">
      <p><Link to={`/`}>Home</Link></p>
      <input value={this.state.login} onChange={this.handleEmail} type="text"  placeholder={`Login`}/>
      <input   value={this.state.password} onChange={this.handlePassword} type="password" placeholder={`Password`}/>
      <p><Link to={`/registration`}>Sign Up!</Link></p>
    </form>
    <button type={`submit`}>Log in!</button>
    </div>
  );
  };
}


export default Login;