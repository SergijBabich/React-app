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
import {gerUser, getPageSize, getTotalUsersCount,getCurrentPage,
isFeatching, followingInProgress} from '../../Redux/Users_Selector.js';
import Users from './Users.js';
import ui from './Users.module.css';
import * as axios from 'axios';
import images from '../../img/12.jpg';
import {usersAPI} from "../../api/api.js";
import {withAuthRedirect} from '../../HOC/withAuthRedirect.js';
import PreLoader from '../Command/preLoader.js';
import {toggleFollowingInProgress} from '../../Redux/Users_Redusers.js';
import {getUsers} from '../../Redux/Users_Redusers.js';
import{compose} from 'redux';
class UsersAPIComponent extends React.Component {

    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);

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
      users: gerUser(state),
      pageSize : getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage :getCurrentPage(state),
      isFeatching: isFeatching(state),
        followingInProgress:followingInProgress(state)
    }
}


 export default compose(
  connect(mapStateToProps, {  follow,unfollow, setCurrentPage,getUsers })
  ) (UsersAPIComponent);
