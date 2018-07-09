import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './registration.css';

class Registration extends  Component{
  constructor(props){
    super(props);

    this.state = {email:'', username:'',password:''};
  }

  handleEmail(event){
    this.setState({email: event.target.value});
  }
  handleUsername(event){
    this.setState({username: event.target.value});
  }
  handlePassword(event){
    this.setState({password: event.target.value});
  }

  render() {
  return(
    <div className={`form-container`}>
      <form  action="">
        <p><Link to={`/`}>Home</Link></p>
        <input value={this.state.email} onChange={this.handleEmail} type="text" placeholder={`Email address`}/>
        <input value={this.state.username} onChange={this.handleUsername}type="text" placeholder={`Username`}/>
        <input value={this.state.password} onChange={this.handlePassword}type="password" placeholder={`Password`}/>
      </form>
      <button type={`submit`}> Sign Up! </button>
    </div>
  );
  };
}


export default Registration;