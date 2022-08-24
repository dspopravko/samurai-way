import React from "react";
import s from "./Message.module.css"

export type MessagePropsType = {
    id: number
    authorId: number
    avatar: string
    name: string
    message: string
    date: string
}

export const Message = (props: MessagePropsType) => {
    const message = props.authorId === 0 ? s.myMessage : s.message;
    const message_container = props.authorId === 0 ? s.myMessage_container : s.message_container;
    const svgWrapper = props.authorId === 0 ? s.mySvgWrapper : s.svgWrapper;
    return <>
        <div className={message}>
            <div className={s.avatar_container}>
                <img alt="avatar" src={props.avatar}/>
            </div>
            <div className={svgWrapper}>
                <svg viewBox="0 0 100 100"><path d="M100,0v100H18.2c0.3-1.2,3.6-1.8,13.6-5.2c14.8-5,28.1-13.3,38.9-24.1C88.8,52.6,100,27.6,100,0z"/></svg>
            </div>
            <div className={message_container}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.body_container}>
                    <div className={s.text_wrapper}>
                        <p className={s.text}>{props.message}</p>
                    </div>
                    <div className={s.time_container}>
                        <div className={s.time}>{props.date}</div>
                    </div>
                </div>
            </div>

        </div>
    </>
}