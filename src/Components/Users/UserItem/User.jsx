import React from "react";
import css from "../Users.module.sass"
import img_man from "../../../empty-man.jpg"
import img_woman from "../../../empty-woman.jpg"
import Preloader from "../../Preloader/Preloader";


const User = (props) => {
    console.log(props.following)
    return (
        <>{props.user || props.currentUser
            ?
            <div className={css.item}>
                <div className={css.submitBox}>
                    <img src={props.img ? props.img : props.sex === 'male' ? img_man : img_woman} alt={css.avatar}/>
                    {   props.currentUser.follow.indexOf(props.id) == -1
                        ? <button
                            disabled={props.following.some(id => id === props.id) || props.id != props.currentUser.follow.id? false : true}
                            onClick={() => props.follow(props.id)} className={css.follow}>Follow</button>
                        : <button
                            disabled={props.following.some(id => id === props.id) || props.id != props.currentUser.follow.id? false : true}
                            onClick={() => props.unfollow(props.id)} className={css.unfollow}>Unfollow</button>
                    }
                </div>
                <div className={css.info}>
                    <h2>{props.name} {props.surname}</h2>
                    <h5>{props.nickname}</h5>
                </div>
            </div>
        :
        <Preloader/>
        }</>
    )
}

export default User