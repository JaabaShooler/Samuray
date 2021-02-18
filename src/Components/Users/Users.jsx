import React from "react";
import User from "./UserItem/User";
import css from "./Users.module.sass"
import Preloader from "../Preloader/Preloader";

const Users = (props) => {
    let AllUsers = props.users.map( u => {
        return <User
            follow={props.follow}
            img={u.img}
            sex={u.sex}
            unfollow={props.unfollow}
            following={props.following}
            followCheck={u.follow}
            key={u.id}
            id={u.id}
            name={u.name}
            surname={ u.surname }
            nickname={u.nickname}
            currentUser={props.currentUser}
        />
    } )
    return (
        <div className={css.main}>
            <div className={css.wrapper}>
                {AllUsers}
            </div>
            {props.isFeaching
                ? <Preloader/>
                : props.totalCount != props.users.length ? <button onClick={props.showMore} className={css.loadMore}>Load More</button> : null
            }

        </div>
    )
}

export default Users