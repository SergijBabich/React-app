import React from 'react';
import p from './Profile.module.css';
import {profileThank} from '../../Redux/profile_Reducer.js';
import {getStatus} from '../../Redux/profile_Reducer.js';
import {updateStatus} from '../../Redux/profile_Reducer.js';
import MyPostContainer from './MyPosts/MyPost_Container.js';
import Profileinfo from './Profileinfo/Profileinfo.js';
import Profile from './Profile.js';
import * as axios from 'axios';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {profileAPI} from "../../api/api.js";
import {withAuthRedirect} from '../../HOC/withAuthRedirect.js';
import{compose} from 'redux';
class ProfileContaier  extends React.Component {

      componentDidMount() {

    let userId  =this.props.match.params.userId;
    if (!userId) {
      userId =this.props.authorizedUserId;
      if(!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.profileThank(userId);
    this.props.getStatus(userId);

  }
  render() {

    return (
        <Profile {...this.props} profile={this.props.profile}
         updateStatus = {this.props.updateStatus}
          status ={this.props.status}/>
   )
 }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContaier);

let mapStateToProps = (state)=> ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { profileThank, getStatus, updateStatus}),
  withRouter,
//  withAuthRedirect
)(ProfileContaier);
