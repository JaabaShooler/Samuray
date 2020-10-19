import React from "react";
import css from './Posts.module.sass';
import avatar from "../../../empty-man.jpg";
import Post from "./Post/Post";


const Posts = () => {
    return (
        <div>
            <div className={css.enter}>
                <h2>My Post</h2>
                <form action="">
                    <textarea type="text" placeholder="Your news..."></textarea>
                    <button className='post-enter'>Send</button>
                </form>
            </div>
            <div className={css.posts}>
                <Post/>
            </div>
        </div>
    )
}

export default Posts;