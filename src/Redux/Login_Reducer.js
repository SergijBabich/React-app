import {loginAPI} from "../api/api.js";
const SET_LOGIN_DATA = 'SET-LOGIN-DATA';
// изначально наш стейт ничего не имеет, то этому он ундефайнет, из за этого
//надо сделать перемуннуцю которая будет ято то тда изначально ложить
// переменная которая хранит изнвачальные данныен для 1
// отрисовки а дальше уже коглда будет что то отрисовываться у нас
// будет онон заменено на то что передано
  let initialState = {
    login: "",
    passwond:"",
    checkbox: false,
    captcha:false
  };

 const loginReducer = (state = initialState, action) => {
   switch (action.type) {
     case SET_LOGIN_DATA:
     return {
       ...state,
      ...action.data,
      isAuth: true
     }
     default:
       return state;
   }
 }

 export let setUserLoginData = (login, passwond, checkbox, captcha) => {
   return {
     type: SET_LOGIN_DATA,
     data: {
       login,
       passwond,
       checkbox,
       captcha
     }
   }
 }
 export const getLoginData = () =>
  (dispatch) => {
    loginAPI.me().then(response => {
                if ( response.data.resultCode === 0) {
                    let {login, passwond, checkbox, captcha} =  response.data.data;
                    dispatch(setUserLoginData(login, passwond, checkbox, captcha));
                  }

            });
 }
 export default loginReducer;
