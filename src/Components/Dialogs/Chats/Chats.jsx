import React from "react";
import css from '../Dialogs.module.sass'
import avatar from '../../../empty-man.jpg'
import {NavLink} from "react-router-dom";


const Chats = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} activeClassName={css.active} className={css.item}>
            <img src={avatar} alt="avatar"/>
            <h3 className={css.name}>{props.data}</h3>
        </NavLink>
    )
}

export default Chats;