import React from "react";
import s from "./Messages.module.css"
import {Message, MessagePropsType} from "./Message/Message";

type MessagesPropsType = {
    messages: Array<MessagePropsType>
}

export default function Messages(props: MessagesPropsType) {
    return <div className={s.message}>
        {props.messages.map(m => {
            return <Message
                id={m.id}
                authorId={m.authorId}
                avatar={m.avatar}
                name={m.name}
                message={m.message}
                date={m.date}
            />
        })}
    </div>
}