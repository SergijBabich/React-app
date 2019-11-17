import React from 'react';
import d from './Dialogs.module.css';
import {BrowserRouter, Route} from  'react-router-dom';
import Friends from './Friends.js';
import StoreContext from '../../store_Context.js';
const FriendsContainer (props) => {

  return <StoreContext.Consumer>
   {  (store) => {
     let state = props.sideBar;
      return <Friends />
    }
  }
  </StoreContext.Consumer>

}
export default FriendsContainer;
