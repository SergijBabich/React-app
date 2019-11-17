import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post.js'
import {addPostActionCreater} from '../../../Redux/profile_Reducer.js'
import {updateNewPostTextActionCreator} from '../../../Redux/profile_Reducer.js'
import MyPosts from './MyPost.js';
import {connect} from "react-redux";

 let mapStateToProps = (state) => {
   return {
     myPostData: state.profilePage.myPostData,
     newPostText: state.profilePage.newPostText
   }
 }
  let mapDispatchToProps = (dispatch)=> {
    return {
      updateNewPostTextActionCreator: (text) =>{
        let action =  updateNewPostTextActionCreator(text);
        console.log(action);
        console.log(action.type);
        dispatch( action );
      },
      addPost: () =>{
        dispatch( addPostActionCreater() );
          console.log("action");
      }
    }
  }
 const MyPostContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostContainer;
