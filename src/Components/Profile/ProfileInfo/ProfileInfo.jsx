import React from "react";
import css from "./ProfileInfo.module.sass";
import img_man from "../../../empty-man.jpg";
import img_woman from "../../../empty-woman.jpg";

const ProfileInfo = (props) => {
    return (
        <div className={css.mainInfo}>
            <div className={css.img}>
                <img src={props.img ? props.img : props.sex == 'male' ? img_man : img_woman} alt="ProfileInfo-img"/>
                <span>nickname: <b>{props.nickname}</b></span>
            </div>

            <div className={css.info}>
                <h3>{props.name} {props.surname}</h3>
                <div className={css.other}>
                    <p>City: <span>{props.city}</span></p>
                    <p>WebSite: <a href={props.website}>{props.website}</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo