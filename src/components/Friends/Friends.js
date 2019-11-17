import React from 'react';
import f from './Friends.module.css';
import {BrowserRouter, Route} from  'react-router-dom';
import {NavLink} from  'react-router-dom';
import FriendsItem from './FriendsItem/FriendsItem.js';
import StoreContext from '../../store_Context.js';
// методом перебираем массив и вызываем ниже рендер этого компонента
  //   возвращаем FriendsItem компонент
const Friends =(props) => {

  let friendElement =
     props.state.friends.map(el => {
     return <FriendsItem name={el.name}  id={el.id} src ={el.avatar} />;
   });

 return (
    <div className= {f.friends_container} >
   <span className= {f.friends_title}>Friends</span>
   <div className={f.friends__items} >

    {friendElement}
   </div>

   </div>
 );
}
export default Friends;
