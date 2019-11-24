import React from 'react';
import { Field ,reduxForm } from 'redux-form';
import {NavLink} from 'react-router-dom';

export let AddMessageForm = (props) => {
  return (
    <form onSubmit= {props.handleSubmit}>
    <div>
    <Field component={"textarea"} name={"newMessagesBody"} placeholder={"send message"} />
    </div>
    <div>
    <button>Send</button>
     </div>
      </form>
  )
}

const MessagesReduxForm = reduxForm({
  form:"dialogAddMessageForm"
})(AddMessageForm)
export default  MessagesReduxForm;
