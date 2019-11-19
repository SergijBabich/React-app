import React from 'react';
import p from './Profile.module.css';

import MyPostContainer from './MyPosts/MyPost_Container.js';
import Profileinfo from './Profileinfo/Profileinfo.js';
import Profile from './Profile.js';
import * as axios from 'axios';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api.js";
import {setUserProfile} from '../../Redux/profile_Reducer.js'
class ProfileContaier  extends React.Component {
  
      componentDidMount() {
    let userId  =this.props.match.params.userId;
    if (!userId) {
      userId =2;
    }
  usersAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data);

    });
  }
  render() {

    return (
        <Profile {...this.props} profile={this.props.profile} />
   )
 }
}

let mapStateToProps = (state)=> ({profile: state.profilePage.profile});
let WithUrlDataContaierComponent = withRouter(ProfileContaier);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContaierComponent);
