import React  from 'react';
import {Field, reduxForm} from 'redux-form';
import './login.css';
import {required, minLength, email} from '../../validators/validators';

let Login = props => (
  <div className="log-form">
    <h2>Login to your account</h2>
    <form className={`form`} action="" onSubmit={props.handleSubmit}>
      <Field validate={[required, minLength, email]} placeholder={`email`} name={`email`}
             component={renderFieldEmail}
             type={`text`}></Field>
      <Field validate={[required, minLength]} placeholder={`Password`} name={`password`}
             component={renderFieldPassword}
             type={`password`}></Field>
      <button type="submit" className="btn">Login</button>
    </form>
  </div>
);

Login = reduxForm({
  form: 'LoginForm',
})(Login);

export default Login;


const renderFieldEmail = ({input, meta}) => {
  console.log(meta.error);
  return (
    <div>
      <input className={meta.error ? ` input error-input` : ` input `}  {...input} type="text"/>
      <p className={meta.error ? `error` : ` `}>{meta.error}</p>
    </div>
  );
};

const renderFieldPassword = ({input, meta}) => {
  console.log(meta.error);
  return (
    <div>
      <input className={meta.error ? ` input error-input` : ` input`}  {...input} type="password"/>
      <p className={meta.error ? `error` : ` `}>{meta.error}</p>
    </div>
  );
};

