import React from "react";
import s from "./Dialogs.module.css"
import Chats from "../../features/Dialogs/Chats/Chats";
import {Route} from "react-router-dom";
import {Dialog} from "../../features/Dialogs/Dialog/Dialog";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = ({chats, sendMessageCallback, profile}: DialogsPropsType) => {
    const sendMessageHandler = (index: number, messageText: string) => {
        const photo = profile.photos.small ? profile.photos.small : null
        sendMessageCallback(index, photo, profile.fullName, messageText)
    }

    const chatHeaderItems = chats.map((chat, index) => <Chats key={index} chatHeader={chat.chatHeader}/>)

    const chatItems = chats.map((chat, index) => {
        return <Route key={index}
                      path={`/messages/${index}`}
                      render={() => (
                          <Dialog
                              chat={chat}
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


