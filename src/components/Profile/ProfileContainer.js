import React from 'react';
import p from './Profile.module.css';
import {profileThank} from '../../Redux/profile_Reducer.js';
import MyPostContainer from './MyPosts/MyPost_Container.js';
import Profileinfo from './Profileinfo/Profileinfo.js';
import Profile from './Profile.js';
import * as axios from 'axios';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api.js";
import {withAuthRedirect} from '../../HOC/withAuthRedirect.js';
import{compose} from 'redux';
class ProfileContaier  extends React.Component {

      componentDidMount() {
    
    let userId  =this.props.match.params.userId;
    if (userId == false) {
      userId =2;
    }
    this.props.profileThank(userId);

  }
  render() {

    return (
        <Profile {...this.props} profile={this.props.profile} />
   )
 }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContaier);

let mapStateToProps = (state)=> ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { profileThank}),
  withRouter,
//  withAuthRedirect
)(ProfileContaier);
