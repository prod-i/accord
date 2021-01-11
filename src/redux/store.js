import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import headerReducer from "./headerReducer";


let store = {
    _state: {
        profile:{
            postsData: [
                { id: 1, name: "Alexandr Gluhov", content: "I'm crying because I realized that I like the work of Justin Bieber", like: "12", comment: "1"},
                { id: 2, name: "Alexandr Gluhov", content: "Code refactoring, tired me out", like: "5", comment: "3"},
              ],
            valuePostText: '',
        },
        dialogs:{
            dialogsData: [
                { id: 1, name: 'Саша блен', },
                { id: 2, name: 'Дима блен', },
                { id: 3, name: 'Том блен', },
                { id: 4, name: 'Уильям блен', },
                { id: 5, name: 'Мэтью блен', },
            ],
            messagesData: [
                { id: 1, message: "Hi friend, let's go play games, and then I'm bored", },
                { id: 2, message: "Yo, go", },
            ],
            valueMessageText: '',
        },
        header:{}
    }, // Data
    _rerenderEntireTree() {
        console.log('State changed');
    },
    dispatch(action) { // { type: 'APP-POST' ... }
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.header = headerReducer(this._state.header, action);

        this._rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    }, 
}


export default store;
window.store = store;