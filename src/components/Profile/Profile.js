import React from 'react';
import p from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPost_Container.js';
import Profileinfo from './Profileinfo/Profileinfo.js';
  import {BrowserRouter, Route} from  'react-router-dom';

import {connect} from "react-redux";
const Profile = (props) => {

   // просто как обьект передаем весь стор, ибо в конейнерніе компоненты
// можно передавать
  return (
  <div >
    <Profileinfo  profile ={props.profile}  updateStatus = {props.updateStatus} status ={props.status} />
   <MyPostContainer />
  </div>
 );
}

export default Profile;
