const ADD_POST = 'ADD-POST';
const TEXT_UPDATE_POST = 'TEXT-UPDATE-POST';

let InitialState = {
    posts: [
        { id: 1, message: 'abra-kadabra'},
        { id: 2, message: 'abra-kadabra abra-kadabra'},
        { id: 3, message: 'abra-kadabra abra-kadabra abra-kadabra'},
        { id: 4, message: 'abra-kadabra abra-kadabra abra-kadabra abra-kadabra'},
        { id: 5, message: 'abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabra abra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabraabra-kadabra'},
    ],
    UpdatedText: '',
}

const ProfileReducer = (state = InitialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let copyState = {...state}
            copyState.posts = [...state.posts];
            copyState.posts.push({id: 6, message: state.UpdatedText,});
            copyState.UpdatedText = '';
            return copyState
        }
        case TEXT_UPDATE_POST: {
            let copyState = {...state}
            copyState.UpdatedText = action.data;
            return copyState
        }
        default:
            return state
    }
}

export const  ActionCreatorAddPost = () =>{
    return { type: ADD_POST }
}
export const ActionCreatorTextUpdatePost = (data) => {
    return {
        type: TEXT_UPDATE_POST,
        data: data,
    }
}

export default ProfileReducer;