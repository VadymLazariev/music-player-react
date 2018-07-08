import React,{Component} from 'react';
import './register.css';

function Register() {
  return(
    <div className={`form-container`}>
      <form  action="">
        <input type="text" placeholder={`Email address`}/><
        <input type="text" placeholder={`Username`}/>
        <input type="password" placeholder={`Password`}/>
      </form>
      <button type={`submit`}>Register</button>
    </div>
  );
}


export default Register;