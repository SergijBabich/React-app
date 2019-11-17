import React from 'react';
import d from './../Dialogs.module.css';




const MessagesItem =(props) => {
  return (
      <div className={d.message}> {props.message}</div>
  );
}



export default MessagesItem;
