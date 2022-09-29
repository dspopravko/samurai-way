import React from "react";
import s from "./Chats.module.css"
import {NavLink} from "react-router-dom";
import {ChatHeaderType} from "../../../redux/store.js";

export type ChatsPropsType = {
    chatHeader: ChatHeaderType
}

export default function Chats( {chatHeader} : ChatsPropsType ) {
    let path = "/messages/" + chatHeader.id
    return (
        <NavLink to={path}>
            <div className={s.message}>
                <div className={s.logo}>
                    <img alt={`Chat logo ${chatHeader.author}`} src={chatHeader.chatLogo}/>
                </div>
                <div className={s.chat}>
                    {chatHeader.author}
                    <div className={s.date}>
                        {chatHeader.date}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}