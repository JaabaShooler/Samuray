import React from "react";
import Posts from "./Posts";
import {ActionCreatorAddPost, ActionCreatorTextUpdatePost} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        text: state.ProfilePage.UpdatedText,
        posts: state.ProfilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => dispatch(ActionCreatorAddPost()),
        UpdateText: (data) => dispatch(ActionCreatorTextUpdatePost(data))
    }
}

const PostsContanier = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContanier;