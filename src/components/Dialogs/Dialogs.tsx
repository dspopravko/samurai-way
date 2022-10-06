import React from "react";
import s from "./Dialogs.module.css"
import Chats from "./Chats/Chats";
import {Route} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = ({chats, inputHandler, sendMessageHandler}: DialogsPropsType) => {

    const chatHeaderItems = chats.map((chat, index) => <Chats key={index} chatHeader={chat.chatHeader}/>)

    const chatItems = chats.map((chat, index) => {
        return <Route key={index}
                      path={`/messages/${index}`}
                      render={() => (
                          <Dialog
                              chat={chat}
                              inputHandler={inputHandler}
                              sendMessageHandler={sendMessageHandler}
                          />)
                      }/>
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
            </div>
        </div>
    )
}


