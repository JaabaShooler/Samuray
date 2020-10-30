const TEXT_UPDATE_MESSAGE = 'TEXT-UPDATE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE'

let InitialState = {
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

const ChatReducer = (state = InitialState, action) => {
    switch (action.type){
        case ADD_MESSAGE: {
            let copyState = {...state};
            copyState.messages = [...state.messages];
            copyState.messages.push({id: 22, data: state.UpdatedText});
            copyState.UpdatedText = '';
            return copyState
        }
        case TEXT_UPDATE_MESSAGE: {
            let copyState = {...state};
            copyState.UpdatedText = action.data
            return copyState
        }
        default:
            return state
    }
}

export const  ActionCreatorAddMessage = () =>{
    return { type: ADD_MESSAGE }
}
export const ActionCreatorTextUpdateMessage = (data) => {
    return {
        type: TEXT_UPDATE_MESSAGE,
        data: data,
    }
}

export default ChatReducer;