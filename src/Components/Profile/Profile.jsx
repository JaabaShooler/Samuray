import React from "react";
import avatar from "../../empty-man.jpg";
import css from './Profile.module.sass'
import Posts from "./Posts/Posts";


const Profile = () => {
    return (
        <div className={css.main}>
            <img src="https://wallpapers-fenix.eu/full/160904/063125204.jpg" alt="https://i.pinimg.com/originals/f2/c5/89/f2c589cd5b482c1d51334a1e127438cf.jpg"/>
            <div className={css.content}>
                <div className={css.mainInfo}>
                    <img src={avatar} alt="Profile-img"/>
                    <div className={css.info}>
                        <h3>Sanya Goncharenko <span>nickname: <b>_jaaba</b></span></h3>
                        <div className={css.other}>
                            <p>Birst Day: <span>13 March</span></p>
                            <p>City: <span>Charnigiv</span></p>
                            <p>Education: <span>CNTU</span></p>
                            <p>WebSite: <a href="https://google.com">Google.com</a></p>
                        </div>
                    </div>
                </div>
                <Posts/>
            </div>
        </div>
    );
}

export default Profile;