import profileReducer from './profile_Reducer.js';
import sidebarReducer from './sidebar_Reducer.js';
import messagesReducer from './messagesPage_Reducer.js';


let store = {
   _state : {
    profilePage : {
      myPostData:   [
                     {id: 1, message: "hi hoy are you", like: 1},
                     {id: 2, message: "Nice too meet you", like: 13},
                     {id: 3, message: "fuccckkkkkk", like: 23},
                     {id: 3, message: "fuccckkkkkk", like: 23},
                     {id: 3, message: "fuccckkkkkk", like: 23}
                   ],
      newPostText: "ddd"
    },
    messagesPage : {
      dialogsData:  [
                     {id: 1, name: "Andrew", avatar:"1"},
                     {id: 2, name: "sacha", avatar:"2"},
                     {id: 3, name: "yahho", avatar:"3"},
                     {id: 4, name: "ivan", avatar:"4"},
                    ],
      messagesData: [
                     {id: 1, message: "hi hoy are you"},
                      {id: 2, message: "Nice too meet you"},
                    ],
      newMessagesBody: '',
    },
    sidebar:{
      friends: [
                     {id: 1, name: "Andrew", avatar:"1"},
                     {id: 2, name: "sacha", avatar:"2"},
                     {id: 3, name: "yahho", avatar:"3"},

                    ]
    }
  },
  getState() {
      return this._state;
    },
    _rerenderEntireTree() {
      console.log("d");
    },
    subscribe(observer) {
      this._rerenderEntireTree = observer;
    },
    //создаемфункцию котороая из стейта тянет данные через пропсы в компоненту */

    dispatch(action) {
      // разбиваем наш диспатч на редьюсеры, их количество равно количеству данных
      // в сторе
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._rerenderEntireTree(this._state);
    }
  }
// функции которіе будуд обрабатівать такш текст ареа, и вызываться в компоненте



export default store;
