import React from "react";
import css from './Posts.module.sass';
import avatar from "../../../empty-man.jpg";
import Post from "./Post/Post";
import {ActionCreatorAddPost, ActionCreatorTextUpdatePost} from "../../../Redux/ProfileReducer";


const Posts = (props) => {

    console.log(props)

    let ArrPosts = props.ProfilePage.posts.map( post => <Post message={post.message} id={post.id}/>)

    let newPostEl = React.createRef();

    let AddPost = () => {
        props.dispatch(ActionCreatorAddPost())

    }

    let UpdateText = () => {

        props.dispatch(ActionCreatorTextUpdatePost(newPostEl.current.value))
    }
    console.log(props.ProfilePage.UpdatedText +" "+ props.ProfilePage);

    return (
        <div>
            <div className={css.enter}>
                <h2>My Post</h2>
                <div className={css.form}>
                    <textarea ref={newPostEl}
                              placeholder="Your news..."
                              onChange={UpdateText}
                              value={props.ProfilePage.UpdatedText}
                    />
                    <button onClick={AddPost} className='post-enter'>Send</button>
                </div>
            </div>
            <div className={css.posts}>
                {ArrPosts}
            </div>
        </div>
    )
}

export default Posts;