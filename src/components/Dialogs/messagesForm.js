import React from 'react';
import { Field ,reduxForm } from 'redux-form';
import {NavLink} from 'react-router-dom';
import {required, maxLengthCreator} from '../../utils/validator/validators.js';
import {Textarea} from '../Command/FormControls/formControls.js';
let maxLength50 = maxLengthCreator(40);
export let AddMessageForm = (props) => {
  return (
    <form onSubmit= {props.handleSubmit}>
    <div>
    <Field component={Textarea} name={"newMessagesBody"}  validate={[required, maxLength50]} placeholder={"send message"} />
    </div>
    <div>
    <button>Sejjjnd</button>
     </div>
      </form>
  )
}

const MessagesReduxForm = reduxForm({
  form:"dialogAddMessageForm"
})(AddMessageForm)
export default  MessagesReduxForm;
