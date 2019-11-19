import React from 'react';
import {BrowserRouter, Route} from  'react-router-dom';
import {NavLink} from  'react-router-dom';
import {connect} from 'react-redux';
import {acceptFollow} from '../../Redux/Users_Redusers.js';
import {acceptUnfollow} from '../../Redux/Users_Redusers.js';
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
import {usersAPI} from "../../api/api.js";
import PreLoader from '../Command/preLoader.js';
import {toggleFollowingInProgress} from '../../Redux/Users_Redusers.js';
import {getUsers} from '../../Redux/Users_Redusers.js';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
  /*    this.props.setIsFeatching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFeatching(false);
        this.props.setUsers(data.items);
          this.props.setCurrent(data.totalCount);
      });*/
    }
    onPageChanged = (pageNumber) => {
          this.props.getUsers(pageNumber, this.props.pageSize);
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
                toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
                followingInProgress = {this.props.followingInProgress}
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
      isFeatching: state.usersPage.isFeatching,
        followingInProgress:state.usersPage.followingInProgress
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

export default connect(mapStateToProps, {  follow,
  unfollow,
    setCurrentPage,
 getUsers }) (UsersAPIComponent);
