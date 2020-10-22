import React from "react";
import css from '../Dialogs.module.sass'


const Message = (props) => {
    return <div className={css.item}>{props.data}</div>
}

export default Message;