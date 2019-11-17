import React from 'react';
import h from './Header.module.css';
import Header from  './Header.js';
import {NavLink} from 'react-router-dom';
const HeaderContainer = (props) => {
    debugger;
  return <header className ={h.header}>
      <img src = "#  "></img>
      <div className={h.login}>
      {props.isAuth? props.login : <NavLink to ={'/login'}  className={h.login} > Login  </NavLink>}
      <div>
      
      </div>
      </div>
    </header>

}

export default HeaderContainer;
