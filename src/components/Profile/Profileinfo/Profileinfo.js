import React from 'react';
import s from './Profileinfo.module.css';
import PreLoader from '../../Command/preLoader.js';
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
