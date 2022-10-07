import React from "react";
import s from "./Chats.module.css"
import {NavLink, useLocation} from "react-router-dom";
import {ChatHeaderType} from "../../../redux/chats-reducer";

export type ChatsPropsType = {
    chatHeader: ChatHeaderType
}

export default function Chats( {chatHeader} : ChatsPropsType ) {
    let path = "/messages/" + chatHeader.id
    const isActive = path === useLocation().pathname? s.messageActive : s.message
    return (
        <NavLink to={path}>
            <div className={isActive}>
                <div className={s.logo}>
                    <img alt={`Chat logo ${chatHeader.author}`} src={chatHeader.chatLogo}/>
                </div>
                <div className={s.chat}>
                    <pre>{chatHeader.author.slice(0,8) + ".."}</pre>
                    <div className={s.date}>
                        {chatHeader.date}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}