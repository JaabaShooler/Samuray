import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import ChatReducer from "./ChatReducer";

let Redusers = combineReducers({
    ProfilePage: ProfileReducer,
    ChatPage: ChatReducer ,

});

let store = createStore(Redusers)

export default store;