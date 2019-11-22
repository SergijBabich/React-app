import React from 'react';
import d from './Dialogs.module.css';
import {BrowserRouter, Route} from  'react-router-dom';
import {NavLink} from  'react-router-dom';
import MessagesItem from './Messages/MessagesItem.js';
import DialogItem from './DialogItem/DialogItem.js';
import { Redirect } from 'react-router-dom';
import {updateNewMessagesBodyCreator} from  '../../Redux/messagesPage_Reducer.js';
import {sendMessagesCreater} from   '../../Redux/messagesPage_Reducer.js';

const Dialogs =(props) => {
  let chekAuth = props.isAuth;
  let state = props.messagesPage;
  // dont tach
  let dialogsElement =
     state.dialogsData.map( el => {
      return  <DialogItem name={el.name}  id={el.id} src ={el.avatar} />;
   });
// dont tach
   let messagesElement = state.messagesData.map( el =>{
        return <MessagesItem   message={el.message}/>
      });
    let newMessagesBody =   state.newMessagesBody;

    let onSendMessageClick = () => {
         props.sendMessagesCreater();
       }


    let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessagesBody(body);
    }
  let redirect = () => {
     if(!chekAuth) {
       return <Redirect to='/login' />
     }
  }

  return(
    <div className= {d.dialogs}>
    {redirect()}
    <div className={d.dialogs_items}>
      {dialogsElement}
   </div>
     <div className={d.messages}>
      <div>  {messagesElement} </div>
      <div><textarea placeholder="send message"
      value = { newMessagesBody }
      onChange ={ onNewMessageChange }
       ></textarea>
        </div>
      <div><button onClick = {onSendMessageClick}   >Send</button> </div>
     </div>

  </div>

  );
}

export default Dialogs;
