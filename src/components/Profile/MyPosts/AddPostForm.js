import React from 'react';
import { Field ,reduxForm } from 'redux-form';
import {NavLink} from 'react-router-dom';

 let AddPost = (props) => {
   return (
     <form  onSubmit= {props.handleSubmit}>
     <div>
       <Field component={"textarea"}  name={"addPostProfile"} />

         <button  >btn</button>
     </div>
      </form>
   )
 }

const AddReduxPost =reduxForm({
 form: 'addPostProfileForm'
})(AddPost)

export default AddReduxPost;
