import React from 'react';
import l from './Login.module.css';

import {NavLink} from 'react-router-dom';


  const Login = (props) => {
  return (
      <div>
        <span>
        Enter your name
        </span>
        <div>
         <input/>
        </div>
        <span>
        Enter  your Login
        </span>
        <div>
         <input/>
        </div>
            <div>
              <button> login </button>
            </div>
      </div>
  )
}
export default Login;
