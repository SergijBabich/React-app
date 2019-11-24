import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post.js';
import AddReduxPost from './AddPostForm.js'
import {addPostActionCreater} from '../../../Redux/profile_Reducer.js'
import {updateNewPostTextActionCreator} from '../../../Redux/profile_Reducer.js'

const MyPosts = (props) => {

  /* перебираем елементы с постов*/
  let myPostElement =
     props.myPostData.map( el => {
      return <Post likesCount ={el.like} message ={el.message} />
  });
  /* создаем ссылку */
   let newPostElement = React.createRef();
/* добавлем пост */
   let onAddPost = ()=> {
     props.addPost();
       }

   /*принимаем значение с инпута и добавляем новую запись */


   let addPostProfile =(values)=> {
      props.addPost(values.addPostProfile);
      console.log(values.addPostProfile);
   }

  return (
    <div className ={s.postBlock}>
    <h3>My posts</h3>
     <AddReduxPost  onSubmit ={addPostProfile} />
    <div className={s.post}>
      {myPostElement}
     </div>
    </div>
 );
}

export default MyPosts;
