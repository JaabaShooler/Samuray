import {AuthAPI} from "../API/Api";

function isEmptyObject(obj) {
    if (!obj) return false;
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}


const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


let InitialState = {
    user: null,
    isAuth: false
}

const AuthReducer = (state = InitialState, action) => {
    switch (action.type){
        case LOGIN:
        {
            console.log('nowAuth');
            return {
                ...state,
                isAuth: !isEmptyObject(action.payload),
                user: action.payload
            }
        }
        case LOGOUT:
        {
            return{
                ...state,
                user: action.payload,
                isAuth: !isEmptyObject(action.payload),
            }
        }


        default:
            return state
    }
}


export const login = (payload) => ({type: LOGIN, payload});
export const logout = (payload) => ({type: LOGOUT, payload});

export const loginThunk = (data) => (dispatch) => {
    AuthAPI.login(data).then(res => {
        dispatch(login(res));
    })
}


export default AuthReducer