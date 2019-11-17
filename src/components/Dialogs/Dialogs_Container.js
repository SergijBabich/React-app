import React from 'react';
import d from './Dialogs.module.css';
import {BrowserRouter, Route} from  'react-router-dom';
import {NavLink} from  'react-router-dom';
import MessagesItem from './Messages/MessagesItem.js';
import DialogItem from './DialogItem/DialogItem.js';
import {updateNewMessagesBodyCreator} from  '../../Redux/messagesPage_Reducer.js';
import {sendMessagesCreater} from   '../../Redux/messagesPage_Reducer.js';
import Dialogs from './Dialogs.js'
import {connect} from   'react-redux';

 //a:2 => a = {2} так передаем і
  let mapStateToProps = (state) => {
    return {
      messagesPage: state.messagesPage,

      }
  }
// тут будем передавать все функции
  let mapDispatchToProps = (dispatch) => {
    return {
      updateNewMessagesBody: (body) => {
            dispatch( updateNewMessagesBodyCreator(body) );
      },
      sendMessagesCreater: () => {
         dispatch(  sendMessagesCreater() );
      },
    }
    }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;
