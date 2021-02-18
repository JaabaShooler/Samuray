import React from "react";
import css from './Profile.module.sass'
import ProfileInfo from "./ProfileInfo/ProfileInfoContainer";
import PostsContanier from "./Posts/PostsContanier";

const Profile = (props) => {
    return (
        <div className={css.main}>
            <img src="https://wallpapers-fenix.eu/full/160904/063125204.jpg" alt="https://i.pinimg.com/originals/f2/c5/89/f2c589cd5b482c1d51334a1e127438cf.jpg"/>
            <div className={css.content}>
                <ProfileInfo />
                <PostsContanier />
            </div>
        </div>
    );
}

export default Profile;