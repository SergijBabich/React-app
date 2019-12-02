 import React from 'react';
import d from './Dialogs.module.css';
import {BrowserRouter, Route} from  'react-router-dom';
import {NavLink} from  'react-router-dom';
import{compose} from 'redux';
import MessagesItem from './Messages/MessagesItem.js';
import DialogItem from './DialogItem/DialogItem.js';
import {sendMessagesCreater} from   '../../Redux/messagesPage_Reducer.js';
import Dialogs from './Dialogs.js'
import {connect} from   'react-redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect.js';

 //a:2 => a = {2} так передаем і
  let mapStateToProps = (state) => {
    return {
      messagesPage: state.messagesPage,

         }
  }
  let mapDispatchToProps = (dispatch) => {
    return {
          sendMessagesCreater: (newMessagesBody) => {
         dispatch( sendMessagesCreater(newMessagesBody) );
      },
    }
    }

  export default compose(
     connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(Dialogs);
