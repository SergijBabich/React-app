import React from 'react';
import l from './Login.module.css';
import { Field ,reduxForm } from 'redux-form';
import {NavLink} from 'react-router-dom';
import {login} from '../../Redux/Auth_Reducer.js';
import {required, maxLengthCreator} from '../../utils/validator/validators.js';
import {Input} from '../Command/FormControls/formControls.js';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
let maxLength_10 = maxLengthCreator(30);
  const LoginForm = (props) => {
  return (
          <form onSubmit= {props.handleSubmit} >
            <div>
            <Field name={"email"} component={Input}  validate ={[required, maxLength_10]} type={"text"} />
            </div>
            <div>
            <Field name={"password"} component={Input}   validate ={[required, maxLength_10]} type={"password"} />
            </div>
            <div>
            <Field name={"rememberMe"} component={Input}  type={"checkbox"} />
            </div>
            {props.error &&  <div className={l.somerryError} >
              {props.error}
                </div>}
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
      props.login(formData.email ,formData.password, formData.rememberMe);

    }
    if(props.isAuth) {
      return <Redirect to ={"/profile"} />
    }
return (
      <div>
      <h1>Login</h1>
       <LoginReduxForm  onSubmit ={onSubmit} />
      </div>
)
}
 const mapStateToProps= (state) =>({
   isAuth: state.auth.isAuth
 })
/*login это сан крийтер */
export default connect(mapStateToProps, {login})(Login);
