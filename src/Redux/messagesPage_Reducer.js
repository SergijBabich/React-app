
const SEND_MESSAGE = 'SEND-MESSAGE';
//
  let initialState = {
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

  };
//  редьюсер для диалогов проверяет по типу что нажато и посылает
// выполнять ту фенкцию
const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
  
    case SEND_MESSAGE:
      let body = action.newMessagesBody;
      return {
        ...state,

          messagesData: [...state.messagesData, {
            id: 4,
            message: body
          }],
      };
    default:
      return state;

  }
}
export let sendMessagesCreater = (newMessagesBody) => {
  return {
    type: SEND_MESSAGE,
    newMessagesBody
  }
}

export default messagesReducer;
