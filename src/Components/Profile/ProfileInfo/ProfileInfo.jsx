import React from "react";
import avatar from "../../../empty-man.jpg";
import css from './ProfileInfo.module.sass'


const ProfileInfo = () => {
    return (
        <div className={css.mainInfo}>
            <img src={avatar} alt="ProfileInfo-img"/>
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
    );
}

export default ProfileInfo;