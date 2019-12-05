import messagesReducer, {sendMessagesCreater} from "./messagesPage_Reducer.js";


let initialState = {
  messagesData: [
                 {id: 1, message: "hi hoy are you"},
                  {id: 2, message: "Nice too meet you"},
                ]
}

it('new ', () => {
  let message = sendMessagesCreater("hi this is me ");
  let final = messagesReducer(initialState, message);
  expect(final.messagesData.length).toBe(3);

});
