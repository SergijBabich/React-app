import {usersAPI} from "../api/api.js";
import {profileAPI} from "../api/api.js";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = "SET-USER-STATUS";
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
    profile: null,
    status : ""
  };

 const profileReducer = (state = initialState, action) => {
   switch (action.type) {
     case ADD_POST: {
       let newPost = {
         id: 1,
         message: action.addPostProfile,
         like: 12
       };
       return {
         ...state,
         myPostData: [...state.myPostData, newPost],

       };
     }

       case SET_USER_PROFILE:
       return { ...state, profile: action.profile};

       case SET_USER_STATUS:
         return {
           ...state,
           status: action.status
         }
     default:
       return state;
   }
 }
 export let addPostActionCreater = (addPostProfile) => {
   return {
     type: ADD_POST,
     addPostProfile
   }
 }

 export let setUserProfile = (profile) => {
   return {
     type: SET_USER_PROFILE,
     profile
   }
 }
 export let setStatus = (status) => {
   return {
     type: SET_USER_STATUS,
     status
   }
 }
 export const  profileThank = (userId ) =>
  async  (dispatch) => {
     let response = await usersAPI.getProfile(userId);
                   dispatch(setUserProfile(response.data));
      }

    export const  getStatus = (userId) =>
      async (dispatch) => {
        let response =  await profileAPI.getStatus(userId);
                      dispatch(setStatus(response.data));
         }


     export const  updateStatus = (status) =>
    async     (dispatch) => {
            let response = await profileAPI.updateStatus(status);
              if(response.data.resultCode ===0) {
                         dispatch(setStatus(status));
                       }
            }



 export default profileReducer;
