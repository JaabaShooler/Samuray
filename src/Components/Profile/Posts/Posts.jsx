import React from "react";
import css from './Posts.module.sass';
import Post from "./Post/Post";


const Posts = (props) => {
    let ArrPosts = props.posts.map( post => <Post message={post.message} id={post.id}/>)
    let newPostEl = React.createRef();
    let AddPost = () => {
        props.AddPost();

    }

    let UpdateText = () => {
        props.UpdateText(newPostEl.current.value)
    }

    return (
        <div>
            <div className={css.enter}>
                <h2>My Post</h2>
                <div className={css.form}>
                    <textarea ref={newPostEl}
                              placeholder="Your news..."
                              onChange={UpdateText}
                              value={props.text}
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