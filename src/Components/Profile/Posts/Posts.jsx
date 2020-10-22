import React from "react";
import css from './Posts.module.sass';
import avatar from "../../../empty-man.jpg";
import Post from "./Post/Post";
import {ActionCreatorAddPost, ActionCreatorTextUpdate} from "../../../Redux/State";


const Posts = (props) => {

    console.log(props)

    let ArrPosts = props.posts.map( post => <Post message={post.message} id={post.id}/>)

    let newPostEl = React.createRef();

    let AddPost = () => {
        props.dispatch(ActionCreatorAddPost())

    }

    let UpdateText = () => {
        props.dispatch(ActionCreatorTextUpdate(newPostEl.current.value, 'ProfilePage'))
    }

    return (
        <div>
            <div className={css.enter}>
                <h2>My Post</h2>
                <div className={css.form}>
                    <textarea ref={newPostEl}
                              placeholder="Your news..."
                              onChange={UpdateText}
                              value={props.UpdatedText}
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