import React from "react";
import s from "./Chats.module.css"
import {NavLink} from "react-router-dom";

type ChatType = {
    author: string
    date: string
    id: number
}

export default function Chats({author, date, id}: ChatType) {
    let path = "/messages/" + id
    return (
        <div className={s.message} >
            <NavLink to={path}>
                <div className={s.chat}>
                    {author}
                </div>
            </NavLink>
        </div>
    )
}