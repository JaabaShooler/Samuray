import React from "react";
import avatar from "../../../../empty-man.jpg";
import css from './Post.module.sass';

const Post = (props) => {

    return (
        <div className={css.item}>
            <img src={avatar} alt="avatar"/>
            <p>{props.message}</p>
        </div>
    )
}

export default Post;