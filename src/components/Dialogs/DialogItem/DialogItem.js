import React from 'react';
import d from './../Dialogs.module.css';
import {NavLink} from  'react-router-dom';

const DialogItem =(props) => {
  return (
      <div>
    <div>
    <img src ={props.src}/>
     </div>
    <div className= {d.dialog + ' ' + d.active}>
    <NavLink to= {'/dialogs/' + props.id}>   {props.name} </NavLink>
    </div>
     </div>
  );
}

export default DialogItem;
