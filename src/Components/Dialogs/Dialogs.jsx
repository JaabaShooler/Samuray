import React from "react";
import css from './Dialogs.module.sass'
import avatar from '../../empty-man.jpg'

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.chats__list}>
                <div className={css.item}>
                    <img src={avatar} alt="avatar"/>
                    <h3 className={css.name}>Sasha Goncharenko</h3>
                </div>
                <div className={css.item}>
                    <img src={avatar} alt="avatar"/>
                    <h3 className={css.name}>Denis Solyankov</h3>
                </div>
                <div className={css.item}>
                    <img src={avatar} alt="avatar"/>
                    <h3 className={css.name}>Sasha Yakimenko</h3>
                </div>
            </div>
            <div className={css.chat}>
                <div className={css.message__list}>
                    <div className={css.item}>Hi (Hello world!) </div>
                    <div className={css.item}>How</div>
                    <div className={css.item}>Are</div>
                    <div className={css.item}>U</div>
                    <div className={css.item}>U</div>
                    <div className={css.item}>U</div>
                    <div className={css.item}>U</div>
                </div>
                <form action="" className={css.enter}>
                    <textarea></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Dialogs;