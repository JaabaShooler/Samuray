import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import ChatReducer from "./ChatReducer";
import UserReducer from "./UserReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import AuthReducer from "./AuthReducer";


let Redusers = combineReducers({
    ProfilePage: ProfileReducer,
    ChatPage: ChatReducer ,
    UserPage: UserReducer,
    AuthPage: AuthReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(Redusers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store;