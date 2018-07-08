import React,{Component} from 'react';
import './login.css';

function Login() {
  return(
    <div className={`form-container`}>
    <form action="">
      <label htmlFor="">login or email: <input type="text"/></label>
      <label htmlFor="">password: <input type="password"/></label>
      <p>Sign Up!</p>
    </form>
    <button type={`submit`}>Log in!</button>
    </div>
  );
}


export default Login;