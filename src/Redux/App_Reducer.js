import {authAPI} from "../api/api.js";
import {stopSubmit} from "redux-form";
import {getAuthData} from  './Auth_Reducer.js';
const SET_INITIALIZED = 'SET-INITIALIZED';
const INIALIZED_SUCCESS = "INIALIZED_SUCCESS";
 // изначально наш стейт ничего не имеет, то этому он ундефайнет, из за этого
//надо сделать перемуннуцю которая будет ято то тда изначально ложить
// переменная которая хранит изнвачальные данныен для 1
// отрисовки а дальше уже коглда будет что то отрисовываться у нас
// будет онон заменено на то что передано
  let initialState = {
    initialized: false

  };

 const appReducer = (state = initialState, action) => {
   switch (action.type) {
     case SET_INITIALIZED:

     return {
       ...state,
        initialized:true,

     }
     default:
       return state;
   }
 }

 export let initializedSuccess = () => {
   return {
     type: INIALIZED_SUCCESS,

   }
 }


 export const initializeApp = () =>
  (dispatch) => {
    let promise = dispatch(getAuthData());
    Promise.all([promise])
    .then(()=> {
      dispatch(initializedSuccess());
    });
 }


 export default appReducer;
