import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';
import './login.css';

/*
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
      <input value={this.state.password} onChange={this.handlePassword} type="password" placeholder={`Password`}/>
      <p><Link to={`/registration`}>Sign Up!</Link></p>
        <button type={`submit`}>Log in!</button>
    </form>

    </div>
  );
  };
}
*/

let Login = props => (
    <div className={`form-container`}>
        <form action="" onSubmit={props.handleSubmit}>
          {/*  <p><Link to={`/`}>Home</Link></p>
            <input type="text" placeholder={`Login`}/>
            <input type="password" placeholder={`Password`}/>
            <button type={`submit`}>Log in!</button>*/}
            <div>
                <Field placeholder={`Login`} name={`login`} component={renderField} type={`text`}></Field>
            </div>
            <div>
                <Field placeholder={`Password`} name={`password`} component={`input`} type={`password`}></Field>
            </div>
            <button type={`submit`}>Log in!</button>
            <p><Link to={`/registration`}>Sign Up!</Link></p>
        </form>
    </div>
);

Login = reduxForm({
    form: 'LoginForm'
})(Login);

export default Login;


const renderField = ({input,meta}) => {
    /*console.log(field);*/
    return(
        <div>
            <input  {...input} placeholder={`Login`} type="text" name={`login`} />
        </div>
    );
};