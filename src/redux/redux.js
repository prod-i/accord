import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import headerReducer from "./headerReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer";


let redusers = combineReducers({
    profile: profileReducer, 
    dialogs: dialogsReducer,
    header: headerReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window._store_ = store;

export default store;