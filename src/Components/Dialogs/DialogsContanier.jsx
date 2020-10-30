import React from "react";
import Dialogs from "./Dialogs";
import {ActionCreatorAddMessage, ActionCreatorTextUpdateMessage} from "../../Redux/ChatReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        text: state.ChatPage.UpdatedText,
        messages: state.ChatPage.messages,
        chats: state.ChatPage.chats
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: () => dispatch(ActionCreatorAddMessage()),
        UpdateText: (data) => dispatch(ActionCreatorTextUpdateMessage(data))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;