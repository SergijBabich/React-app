import React from 'react';
import ui from './Users.module.css';
import * as axios from 'axios';
import images from '../../img/12.jpg';
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api.js";
import Paginator from "../Command/Paginator/Paginator.js"
  // єтим оборачивание селали компонетнту чистой фунцией
  // я умею чісто писать
  let User = ({user,unfollow,followingInProgress, follow}) =>  {
 let u = user;
        return (
          <div>
              <span>
                <div >
                  <NavLink to ={'/profile/'+ u.id}>
                    <img className ={ui.userPhoto}  src ={u.photos.small != null ? u.photos.small : images  } />
                  </NavLink>
                </div>
            </span>
            {u.follower? <button disabled={followingInProgress.some( id => id === u.id)} onClick ={ () => {
                unfollow(u.id);}
                } > UnFollow </button>
                :<button disabled={followingInProgress} onClick ={() => { follow(u.id);}
          }> Follow </button> }

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

export default User;
