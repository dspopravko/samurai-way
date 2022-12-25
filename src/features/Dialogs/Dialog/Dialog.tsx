import React from "react";
import Messages from "../Messages/Messages";
import s from "./Dialog.module.css";
import {ChatType} from "../../../redux/chats-reducer";
import {FormDataType, SendMessageForm} from "../../../components/MessageForm/MessageForm";

type DialogType = {
    chat: ChatType
    sendMessageHandler: (index: number, message: string) => void
}

export const Dialog = ({chat, sendMessageHandler}: DialogType) => {
    const onSubmitMessageForm = (form: FormDataType) => {
        sendMessageHandler(chat.chatHeader.id, form.messageText)
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
            <SendMessageForm
                placeholder={'Write a message...'}
                onSubmit={onSubmitMessageForm}
            />
        </>
    )
}