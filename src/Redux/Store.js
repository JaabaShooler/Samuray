import ProfileReducer from "./ProfileReducer";
import ChatReducer from "./ChatReducer";

let store = {
    _state: {
        ProfilePage: {
            posts: [
                { id: 1, message: 'abra-kadabra'},
                { id: 2, message: 'abra-kadabra abra-kadabra'},
                { id: 3, message: 'abra-kadabra abra-kadabra abra-kadabra'},
                { id: 4, message: 'abra-kadabra abra-kadabra abra-kadabra abra-kadabra'},
                { id: 5, message: 'abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabra'},
            ],
            UpdatedText: '',
        },
        ChatPage: {
            chats: [
                {id: 1, data: "Sasha Goncharenko"},
                {id: 2, data: "Denis Solyankov"},
                {id: 3, data: "Sasha Yakimenko"},
                {id: 4, data: "Sasha Yakimenko"},
                {id: 5, data: "Sasha Yakimenko"},
                {id: 6, data: "Sasha Yakimenko"},
                {id: 7, data: "Sasha Yakimenko"},
                {id: 8, data: "Sasha Yakimenko"},
                {id: 9, data: "Sasha Yakimenko"},
            ],
            messages: [
                { id: 1, data: "Hi (Hello world!) "},
                { id: 2, data: "Hi (Helloo world!) "},
                { id: 3, data: "Hi (Hellooo world!) "},
                { id: 4, data: "Hi (Helloooo world!) "},
                { id: 5, data: "Hi (Helloooo world!) "},
                { id: 6, data: "Hi (Hellooo world!) "},
                { id: 7, data: "Hi (Helloo world!) "},
                { id: 8, data: "Hi (Hello world!) "},
                { id: 1, data: "Hi (Hello world!) "},
                { id: 2, data: "Hi (Helloo world!) "},
                { id: 3, data: "Hi (Hellooo world!) "},
            { id: 4, data: "Hi (Helloooo world!) "},
            { id: 5, data: "Hi (Helloooo world!) "},
            { id: 6, data: "Hi (Hellooo world!) "},
            { id: 7, data: "Hi (Helloo world!) "},
            { id: 8, data: "Hi (Hello world!) "},
        ],
            UpdatedText: ''
        }
        },
        _callSubscriber()  {},

        getState () {
            return this._state;
        },
        obs (observer) {
            this._callSubscriber = observer;
        },

        dispatch(action){
            this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
            this._state.ChatPage = ChatReducer(this._state.ChatPage, action);

            this._callSubscriber(this._state)
    }

}


export default store;