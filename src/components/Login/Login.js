import React from 'react';
import l from './Login.module.css';
import { Field ,reduxForm } from 'redux-form';
import {NavLink} from 'react-router-dom';
import {getLoginData} from '../../Redux/Login_Reducer.js';
  const LoginForm = (props) => {
  return (
          <form onSubmit= {props.handleSubmit} >
            <div>
            <Field name={"Login"} component={"input"} type={"text"} />
            </div>
            <div>
            <Field name={"Password"} component="input" type={"password"} />
            </div>
            <div>
            <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
            </div>
            <div>
               <button>LoGin</button>
            </div>
            </form>
        )
}
 const LoginReduxForm  = reduxForm({
  form: 'login'
 })(LoginForm)

  const Login = (props) => {
    const onSubmit = (formData) => {
    }
return (
      <div>
      <h1>Login</h1>
       <LoginReduxForm  onSubmit ={onSubmit} />
      </div>
)
}


export default Login;
