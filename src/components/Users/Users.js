import React from 'react';
import ui from './Users.module.css';
import * as axios from 'axios';
import images from '../../img/12.jpg';
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api.js";
import Paginator from "../Command/Paginator/Paginator.js"
 import User from "./User.js"
  // єтим оборачивание селали компонетнту чистой фунцией
  // я умею чісто писать

  let Users = ({currentPage, onPageChanged,totalUsersCount, pageSize, users, ...props}) =>  {

        return (
          <div>
          <Paginator currentPage ={currentPage} totalUsersCount ={totalUsersCount} pageSize={pageSize}  onPageChanged= {onPageChanged} />
          <div>
            {
              users.map( u => <User user= {u}
                                          followingInProgress= {props.followingInProgress}
                                            key = {u.id}
                                            follow = {props.follow}
                                            unfollow= {props.unfollow} />
              )
            }
      </div>
  </div>)
    }

export default Users;
