import React from "react";
import s from "./Chats.module.css"
import {NavLink} from "react-router-dom";
import {ChatHeaderType} from "../../../redux/state.js";


export default function Chats( {chatHeader} : { chatHeader: ChatHeaderType } ) {
    let path = "/messages/" + chatHeader.id
    return (
        <NavLink to={path}>
            <div className={s.message}>
                <div className={s.logo}>
                    <img src={chatHeader.chatLogo}/>
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