import profileReducer, {addPostActionCreater} from './profile_Reducer.js';

let state = {
  myPostData:   [
                 {id: 1, message: "hi hoy are you", like: 1},
                 {id: 2, message: "Nice too meet you", like: 13},
                 {id: 3, message: "fuccckkkkkk", like: 23},
                 {id: 4, message: "fuccckkkkkk", like: 23},
                 {id: 5, message: "fuccckkkkkk", like: 23}
               ],

};

it('new post sould be added', () => {
  let addPost = addPostActionCreater("ffddfddd");
  let newState = profileReducer(state, addPost);
expect(newState.myPostData.length).toBe(6);
});
