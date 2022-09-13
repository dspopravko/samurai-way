import React from "react";
import s from "./Dialogs.module.css"
import Chats from "./Chats/Chats";
import Messages from "./Messages/Messages";
import {ChatType} from "../../redux/state.js";
import {Route} from "react-router-dom";

export const Dialogs = ( {chats} : {chats: ChatType[] } ) => {

    const chatHeaderItems = chats.map((chat, index) => {
        return <Chats key={index} chatHeader={chat.chatHeader}/>
    })

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
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}