import React from "react";
import s from "./Messages.module.css"
import {Message} from "./Message/Message";
import {ChatType} from "../../../redux/chats-reducer";


export default function Messages(props: ChatType) {

    return <div className={s.message}>
        {props.chatMessages.map((m, index) => {
            return <Message key={index}
                id={m.id}
                authorId={m.authorId}
                avatar={m.avatar}
                name={m.name}
                message={m.body}
                date={m.date}
            />
        })}
    </div>
}