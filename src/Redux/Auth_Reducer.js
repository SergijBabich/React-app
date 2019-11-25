import {authAPI} from "../api/api.js";

const SET_USER_DATA = 'SET-USER-DATA';
// изначально наш стейт ничего не имеет, то этому он ундефайнет, из за этого
//надо сделать перемуннуцю которая будет ято то тда изначально ложить
// переменная которая хранит изнвачальные данныен для 1
// отрисовки а дальше уже коглда будет что то отрисовываться у нас
// будет онон заменено на то что передано
  let initialState = {
    userName: null,
    email:null ,
    login: null,
    isAuth: false
  };

 const authReducer = (state = initialState, action) => {
   switch (action.type) {
     case SET_USER_DATA:

     return {
       ...state,
      ...action.payload,
  
     }
     default:
       return state;
   }
 }

 export let setUserData = (userId, email, login, isAuth) => {
   return {
     type: SET_USER_DATA,
     payload: {
       userId,
       email,
       login,
       isAuth

     }
   }
 }
 export const getAuthData = () =>
  (dispatch) => {
    authAPI.me().then(response => {
                if ( response.data.resultCode === 0) {
                    let {id, email , login} =  response.data.data;
                    dispatch(setUserData(id, email , login, true));
                  }

            });
 }

 export const login = (email, password, rememberMe) =>
  (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
                if ( response.data.resultCode === 0) {
                      dispatch(getAuthData())
                    }
                });
 }

 export const logOut = () =>
  (dispatch) => {
    authAPI.logOut().then(response => {
                if ( response.data.resultCode === 0) {
                      dispatch(setUserData(null, null , null, false));
                    }
                });
 }
 export default authReducer;
