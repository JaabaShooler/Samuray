const ADD_POST = 'ADD-POST';

const TEXT_UPDATE = 'TEXT-UPDATE';

const ADD_MESSAGE = 'ADD-MESSAGE'


const PAGES = {
    Profile: 'ProfilePage',
    Chat: 'ChatPage'
}


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
        if(action.type === ADD_POST){
            let newPost = {
                id: 6,
                message: this._state.ProfilePage.UpdatedText,
            };
            this._state.ProfilePage.posts.push(newPost);
            this._state.ProfilePage.UpdatedText = '';
            this._callSubscriber(this._state)
        }else
            if(action.type === TEXT_UPDATE){
                if(action.page === PAGES.Profile){ this._state.ProfilePage.UpdatedText = action.text }
                if(action.page === PAGES.Chat){ this._state.ChatPage.UpdatedText = action.text }
                this._callSubscriber(this._state)
                console.log(this._state.ProfilePage.UpdatedText)
        }else if(action.type === ADD_MESSAGE){
                let newMessage = {
                    id: 33,
                    data: this._state.ChatPage.UpdatedText
                }
                this._state.ChatPage.messages.push(newMessage);
                this._state.ChatPage.UpdatedText = '';
                this._callSubscriber(this._state)
            }


    }

}


export const  ActionCreatorAddPost = () =>{
    return { type: ADD_POST }
}

export const  ActionCreatorAddMessage = () =>{
    return { type: ADD_MESSAGE }
}

export const ActionCreatorTextUpdate = (text, page) => {
    return {
        type: TEXT_UPDATE,
        text: text,
        page: page
    }
}

export default store;