import React from "react";
import Messages from "../Messages/Messages";
import s from "./Dialog.module.css";
import {ChatType} from "../../../redux/chats-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogType = {
    chat: ChatType
    sendMessageHandler: (index: number, message: string) => void
}
type FromDataType = {
    message: string
}
export const Dialog = ({chat, sendMessageHandler}: DialogType) => {
    const onSubmitMessageForm = (form: FromDataType) => {
        sendMessageHandler(chat.chatHeader.id, form.message)
    }

    return (
        <>
            <div className={s.chatWrapper}>
                <Messages key={chat.chatHeader.id}
                          chatMessages={chat.chatMessages}
                          chatHeader={chat.chatHeader}
                />
            </div>
            <SendMessageFormRedux
                onSubmit={onSubmitMessageForm}
            />
        </>
    )
}

const SendMessageForm = (props: InjectedFormProps<FromDataType>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.inputWrapper}>
                <Field
                    component={"textarea"}
                    name={"message"}
                    placeholder={"Enter your message..."}
                />
            <button>Send</button>
        </form>
    )
}

const SendMessageFormRedux = reduxForm<FromDataType>({form: 'SendMessageForm'})(SendMessageForm)