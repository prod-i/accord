const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Test 1', },
        { id: 2, name: 'Test 2', },
        { id: 3, name: 'Test 3', },
        { id: 4, name: 'Test 4', },
        { id: 5, name: 'Test 5', },
    ],
    messagesData: [
        { id: 1, message: "Hi friend, let's go play games, and then I'm bored", },
        { id: 2, message: "Hi, go", },
    ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.valueMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: "5", message: newMessage, }],
            };
        default:
            return state;
    }
}


export const addMessage = (valueMessageText) => ({ type: ADD_MESSAGE, valueMessageText });

export default dialogsReducer;