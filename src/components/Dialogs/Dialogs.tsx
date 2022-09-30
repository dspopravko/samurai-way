import React from "react";
import s from "./Dialogs.module.css"
import Chats from "./Chats/Chats";
import {ActionsTypes, ChatType} from "../../redux/store.js";
import {Route} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";

export type DialogsPropsType = {
    chats: ChatType[]
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = ({chats, dispatch}: DialogsPropsType) => {

    const chatHeaderItems = chats.map((chat, index) => {
        return <Chats key={index} chatHeader={chat.chatHeader}/>
    })

    const chatItems = chats.map((chat, index) => {
        return <Route key={index}
                      path={`/messages/${index}`}
                      render={() => <Dialog chat={chat} dispatch={dispatch}/>
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


