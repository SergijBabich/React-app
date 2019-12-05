import React from 'react';
import l from './Login.module.css';
import { Field ,reduxForm } from 'redux-form';
import {NavLink} from 'react-router-dom';
import {login} from '../../Redux/Auth_Reducer.js';
import {required, maxLengthCreator} from '../../utils/validator/validators.js';
import {Input} from '../Command/FormControls/formControls.js';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {createField} from "../Command/FormControls/formControls.js"
let maxLength_10 = maxLengthCreator(30);
  const LoginForm = ({handleSubmit, error}) => {
  return (
          <form onSubmit= {handleSubmit} >
            <div>
                {createField('email',"ender your email",Input, [required, maxLength_10], 'text' )}

            </div>
            <div>
              {createField('password',"",Input, [required, maxLength_10], 'password' )}
        
            </div>
            <div>
            <Field name={"rememberMe"} component={Input}  type={"checkbox"} />
            </div>
            {error &&  <div className={l.somerryError} >
              {error}
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
