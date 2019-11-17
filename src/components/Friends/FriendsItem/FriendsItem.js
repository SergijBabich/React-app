import React from 'react';
import f from './FriendsItem.module.css';
import {NavLink} from  'react-router-dom';
const FriendsItem = (props) => {
  return (
    <div className={f.friend_contain_item}>
  <div>
  {/*передаем пропсы с свойствами для того что бы в фриентд оно
 передалось и отрисовалось */}
  <img src ={props.src}/>
   </div>
  <div className={f.friend__name} >
  <NavLink to= {'/friends/' + props.id}>   {props.name} </NavLink>
  </div>
   </div>
 );
}

export default FriendsItem;
