import React, {ChangeEvent} from "react";
import Messages from "../Messages/Messages";
import s from "../Dialogs.module.css";
import {Button} from "../../misc/Button/Button";
import {ChatType} from "../../../redux/chats-reducer";

type DialogType = {
    chat: ChatType
    inputHandler: (input: string, chatId: number) => void
    sendMessageHandler: (index: number) => void
}
export const Dialog = ({chat, inputHandler, sendMessageHandler}: DialogType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        inputHandler(e.currentTarget.value, chat.chatHeader.id)

    const onClickSendMessageHandler = (index: number) =>
        sendMessageHandler(index)

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
                    onClickSendMessageHandler(chat.chatHeader.id)
                }}/>
            </div>
        </>
    )
}