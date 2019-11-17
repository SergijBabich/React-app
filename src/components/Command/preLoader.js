import React from 'react';
import ui from '../Users/Users.module.css';
import * as axios from 'axios';
import loader from '../../img/Spin.svg';

const PreLoader = (props) => {
  return (
      <div>
       <img src= {loader} className={ui.preLoader} />
       </div>
  )
}
export default PreLoader;
