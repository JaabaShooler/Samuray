import React from "react";
import css from './Dialogs.module.sass'
import Chats from "./Chats/Chats";
import Message from "./Message/Message";


const Dialogs = (props) => {

    console.log(props);

    let ArrMessages = props.messages.map( message => <Message data={message.data} id={message.id}/>)

    let ArrChats = props.chats.map( chat => <Chats data={chat.data} id={chat.id} /> )

    let newMessage = React.createRef();
    // debugger;

    let AddMessage = () => {
        props.AddMessage()
    }

    let UpdateText = () => {
        props.UpdateText(newMessage.current.value)
    }

    return (
        <div className={css.dialogs}>
            <div className={css.chats__list}>
                {ArrChats}
            </div>
            <div className={css.chat}>
                <div className={css.message__list}>
                    {ArrMessages}
                </div>
                <div className={css.enter}>
                    <textarea
                        ref={newMessage}
                        placeholder="Write a message..."
                        onChange={UpdateText}
                        value={props.text}
                    />
                    <button onClick={AddMessage} >Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;