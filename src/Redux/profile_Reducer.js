import {usersAPI} from "../api/api.js";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
// изначально наш стейт ничего не имеет, то этому он ундефайнет, из за этого
//надо сделать перемуннуцю которая будет ято то тда изначально ложить
// переменная которая хранит изнвачальные данныен для 1
// отрисовки а дальше уже коглда будет что то отрисовываться у нас
// будет онон заменено на то что передано
  let initialState = {
    myPostData:   [
                   {id: 1, message: "hi hoy are you", like: 1},
                   {id: 2, message: "Nice too meet you", like: 13},
                   {id: 3, message: "fuccckkkkkk", like: 23},
                   {id: 3, message: "fuccckkkkkk", like: 23},
                   {id: 3, message: "fuccckkkkkk", like: 23}
                 ],
    newPostText: "ddd",
    profile: null
  };

 const profileReducer = (state = initialState, action) => {
   switch (action.type) {
     case ADD_POST: {
       let newPost = {
         id: 1,
         message: state.newPostText,
         like: 12
       };
       return {
         ...state,
         myPostData: [...state.myPostData, newPost],
         newPostText: ''
       };
     }
     case UPDATE_NEW_POST_TEXT:
       return {
         ...state,
         newPostText: action.newText
       };
       case SET_USER_PROFILE:
       return { ...state, profile: action.profile};

     default:
       return state;
   }
 }
 export let addPostActionCreater = () => {
   return {
     type: ADD_POST
   }
 }
 export let updateNewPostTextActionCreator = (text) => {
   return {
     type: UPDATE_NEW_POST_TEXT,
     newText: text
   }
 }
 export let setUserProfile = (profile) => {
   return {
     type: SET_USER_PROFILE,
     profile
   }
 }
 export const  profileThank = (userId ) =>
    (dispatch) => {
     usersAPI.getProfile(userId).then(response => {
                   dispatch(setUserProfile(response.data));
      });
    }


 export default profileReducer;
