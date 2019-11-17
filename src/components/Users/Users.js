import React from 'react';
import ui from './Users.module.css';
import * as axios from 'axios';
import images from '../../img/12.jpg';
import {NavLink} from 'react-router-dom';
  // єтим оборачивание селали компонетнту чистой фунцией
  // я умею чісто писать
  let Users = (props) =>  {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);

    let pages =[];
    for (let i =1; i<=pagesCount; i++) {
        pages.push(i);
    }
        return (
            <div>
              <div>
              { pages.map(el => {

                   return <span className={props.currentPage === el && ui.selectPage }
                                onClick ={ (e)=>  {props.onPageChanged(el)} } >{el}</span>
              })}
              </div>
              {
              props.users.map( u =>  <div key={u.id}>
            <span>
                <div >
                  <NavLink to ={'/profile/'+ u.id}>
                    <img className ={ui.userPhoto}  src ={u.photos.small != null ? u.photos.small : images  } />
                  </NavLink>
                </div>
            </span>
            {u.follower? <button onClick ={ () => { props.unfollow(u.id)}}> UnFollow </button>:
             <button onClick ={() => { props.follow(u.id)}}> Follow </button> }

            <span>
              <span>
                <div>{u.name}</div>
                 <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                 <div>{"u.location.city"}</div>
              </span>
          </span>
      </div>)
      }
      </div>)

    }

export default Users;
