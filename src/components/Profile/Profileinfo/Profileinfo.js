import React from 'react';
import s from './Profileinfo.module.css';
import PreLoader from '../../Command/preLoader.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.js';
const Profileinfo = (props) => {

  if (!props.profile) {
    return <PreLoader />
  }
  return (
    <div>
      <div >
      <img src='#' />
        </div>
        <div className={s.description_block}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks  updateStatus = {props.updateStatus} status ={props.status} />
      <div>
        {props.profile.fullName}
      </div>
      <div>
        {props.profile.aboutMe}
      </div>
        </div>
    </div>
 );
}

export default Profileinfo;
