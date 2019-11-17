import React from 'react';
import {BrowserRouter, Route} from  'react-router-dom';
import {NavLink} from  'react-router-dom';
import {connect} from 'react-redux';
import {follow} from '../../Redux/Users_Redusers.js';
import {unfollow} from '../../Redux/Users_Redusers.js';
import {setUsers} from '../../Redux/Users_Redusers.js';
import {setCurrentPage} from '../../Redux/Users_Redusers.js';
import {setCurrent} from '../../Redux/Users_Redusers.js';
import {setIsFeatching} from '../../Redux/Users_Redusers.js';
import Users from './Users.js';
import ui from './Users.module.css';
import * as axios from 'axios';
import images from '../../img/12.jpg';

import PreLoader from '../Command/preLoader.js';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
      this.props.setIsFeatchingActionCreater(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFeatchingActionCreater(false);
        this.props.setUser(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
      });
    }
    onPageChanged = (pageNumber) => {
       this.props.setCurrentPage(pageNumber);
             this.props.setIsFeatchingActionCreater(true);
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
               this.props.setIsFeatchingActionCreater(false);
         this.props.setUser(response.data.items);
       });
    }
  render() {
        return <>
            {this.props.isFeatching? <PreLoader /> : null  }
          <Users totalUsersCount ={this.props.totalUsersCount}
                pageSize ={this.props.pageSize}
                users = {this.props.users}
                unfollow = {this.props.unfollow}
                follow = {this.props.follow}
                onPageChanged={this.onPageChanged }
                currentPage = {this.props.currentPage}
               />
            </>
  }
}

let mapStateToProps = (state) => {
  return {
      users: state.usersPage.users,
      pageSize : state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage : state.usersPage.currentPage,
      isFeatching: state.usersPage.isFeatching
    }
}
// тут будем передавать все функции
/*let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId)=> {
      dispatch(followActionCreater(userId));
    },
    unfollow: (userId)=> {
      dispatch(unfollowActionCreater(userId));
    },
    setUser: (users)=> {
      dispatch(setUsersActionCreater(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreater(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setCurrentActionCreater(totalUsersCount));
    },
    setIsFeatchingActionCreater: (isFeatching) => {
      dispatch(setIsFeatchingActionCreater(isFeatching));
    }
  }
}
*/

export default connect(mapStateToProps, {  follow:follow,
  unfollow:unfollow,
  setUser:setUsers,
  setCurrentPage:setCurrentPage,
  setTotalUsersCount: setCurrent,
  setIsFeatchingActionCreater:setIsFeatching }) (UsersAPIComponent);
