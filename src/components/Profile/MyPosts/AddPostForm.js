import React from 'react';
import { Field ,reduxForm } from 'redux-form';
import {NavLink} from 'react-router-dom';
import {required, maxLengthCreator} from '../../../utils/validator/validators.js';
import {Textarea} from '../../Command/FormControls/formControls.js';
let  maxLength10  =  maxLengthCreator(10);
 let AddPost = (props) => {
   return (
     <form  onSubmit= {props.handleSubmit}>
     <div>
       <Field component={Textarea} validate={[required, maxLength10]} name={"addPostProfile"} />

         <button  >btn</button>
     </div>
      </form>
   )
 }

const AddReduxPost =reduxForm({
 form: 'addPostProfileForm'
})(AddPost)

export default AddReduxPost;
