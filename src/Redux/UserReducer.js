import {userAPI} from "../API/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_FEACHING = 'TOGGLE_FEACHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let InitialState = {
    users: [],
    isFeaching: false,
    totalCount: 0,
    following: []
}

const UserReducer = (state = InitialState, action) => {
    switch (action.type){
        case FOLLOW:
        {
            return {
                ...state,
                users: state.users.map( u =>  u.id === 1 ? {...u, follow: [...u.follow, action.userID]} : u)
            }
        }
        case UNFOLLOW:
        {
            return {
                ...state,
                users: state.users.map( u => u.id === 1 ? {...u, follow: u.follow.filter(id => id !== action.userID)} : u )
            }
        }
        case SET_USER:
            return {...state, users: [...state.users, ...action.users]}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case TOGGLE_FEACHING:
            return {...state, isFeaching: action.isFeaching}
        case TOGGLE_FOLLOWING:
            return {...state,  following: action.isFeaching
                    ?[...state.following, action.userID]
                    : state.following.filter(id => id != action.userID)}
        default:
            return state
    }
}


export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USER, users });
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFeaching = (isFeaching) => ({type: TOGGLE_FEACHING, isFeaching });
export const toggleFollowing = (userID, isFeaching) => ({type: TOGGLE_FOLLOWING, userID, isFeaching });

export const getUsersThunkCreator = (current) => {
    return (dispatch) => {
        dispatch(toggleIsFeaching(true));
        userAPI.getUsers().then(response => {
            dispatch(setUsers(response.users))
            dispatch(setTotalCount(response.totalCount))
            dispatch(toggleIsFeaching(false))
        }).catch(err => console.error(err))
    }
}

export const followThunk = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowing(userID, true));
        userAPI.follow(userID).then(res => {
            if (res.result == true){
                dispatch(follow(userID));
                dispatch(toggleFollowing(userID, false));
            }
        }).catch(err => console.error(err))
    }
}

export const unfollowThunk = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowing(userID, true));
        userAPI.unfollow(userID).then(res => {
            if (res.result == true){
                dispatch(unfollow(userID));
                dispatch(toggleFollowing(userID, false));
            }
        }).catch(err => console.error(err))
    }
}

export default UserReducer