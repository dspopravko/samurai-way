import React from "react";
import s from "./Dialogs.module.css"
import Chats from "./Chats/Chats";
import Messages from "./Messages/Messages";
import {ChatType} from "../../redux/state.js";
import {Route} from "react-router-dom";
import {Button} from "../misc/Button/Button";

export type DialogsPropsType = {
    chats: ChatType[]
}

export const Dialogs = ( {chats} : DialogsPropsType ) => {

    const chatHeaderItems = chats.map((chat, index) => {
        return <Chats key={index} chatHeader={chat.chatHeader}/>
    })

    const sendMessageHandler = () => {
        console.log("Building functionality...")
    }

    const chatItems = chats.map((chat, index) => {
        return <Route key={index}
                      path={`/messages/${index + 1}`}
                      render={() =>
                          <Messages key={index}
                                    chatMessages={chat.chatMessages}
                                    chatHeader={chat.chatHeader}/>}/>
    })

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.chats}>
                {chatHeaderItems}
            </div>
            <div className={s.messagesPage}>
                <div className={s.message}>
                    {chatItems}
                </div>
                <div className={s.inputWrapper}>
                <input/>
                    <Button name={"Send"} onClick={sendMessageHandler}/>
                </div>
            </div>
        </div>
    )
}