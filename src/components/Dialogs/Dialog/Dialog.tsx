import React, {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageAC} from "../../../redux/chats-reducer";
import Messages from "../Messages/Messages";
import s from "../Dialogs.module.css";
import {Button} from "../../misc/Button/Button";
import {ActionsTypes, ChatType} from "../../../redux/store.js";

type DialogType = {
    chat: ChatType
    dispatch: (action: ActionsTypes) => void
}
export const Dialog = ({chat, dispatch}: DialogType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageAC(e.currentTarget.value, chat.chatHeader.id))
    }
    const sendMessageHandler = (index: number) => {
        dispatch(sendMessageAC(index))
    }

    return (
        <>
            <div className={s.chatWrapper}>
                <Messages key={chat.chatHeader.id}
                          chatMessages={chat.chatMessages}
                          chatHeader={chat.chatHeader}
                          chatNewMessage={chat.chatNewMessage}
                />
            </div>
            <div className={s.inputWrapper}>
            <textarea
                value={chat.chatNewMessage.message}
                onChange={onChangeInputHandler}
            />
                <Button name={"Send"} onClick={() => {
                    sendMessageHandler(chat.chatHeader.id)
                }}/>
            </div>
        </>
    )
}