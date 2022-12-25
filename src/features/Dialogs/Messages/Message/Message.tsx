import React from "react";
import s from "./Message.module.css"
import logo from "../../../../assets/img/defaultUser.png";

export type MessagePropsType = {
    id: number
    authorId: number
    avatar: string | null
    name: string
    message: string
    date: string
}

export const Message = ({
                            authorId,
                            avatar = "https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar.png",
                            name,
                            message,
                            date,
                        }:
                            MessagePropsType
) => {
    return <>
        <div className={authorId === 0 ? s.myMessage : s.message}>
            <div className={s.avatar_container}>
                <img alt="avatar" src={avatar || logo}/>
            </div>
            <div className={authorId === 0 ? s.mySvgWrapper : s.svgWrapper}>
                <svg viewBox="0 0 100 100">
                    <path
                        d="M100,0v100H18.2c0.3-1.2,3.6-1.8,13.6-5.2c14.8-5,28.1-13.3,38.9-24.1C88.8,52.6,100,27.6,100,0z"/>
                </svg>
            </div>
            <div className={authorId === 0 ? s.myMessage_container : s.message_container}>
                <div className={s.name}>
                    {name}
                </div>
                <div className={s.body_container}>
                    <div className={s.text_wrapper}>
                        <p className={s.text}>{message}</p>
                    </div>
                    <div className={s.time_container}>
                        <div className={s.time}>{date}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}