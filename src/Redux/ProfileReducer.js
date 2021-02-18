const ADD_POST = 'ADD-POST';
const TEXT_UPDATE_POST = 'TEXT-UPDATE-POST';

let InitialState = {
    posts: [],
    UpdatedText: '',
}

const ProfileReducer = (state = InitialState, action) => {
    let copyState ={}
    switch (action.type){
        case ADD_POST: {
            copyState = {
                ...state,
                posts: [{id: 6, message: state.UpdatedText}, ...state.posts],
                UpdatedText: ''
            }
            return copyState
        }
        case TEXT_UPDATE_POST: {
            copyState = {
                ...state,
                UpdatedText: action.data
            }
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