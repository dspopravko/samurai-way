import React from "react";
import s from "./Dialogs.module.css"
import Chats from "./Chats/Chats";
import Messages from "./Messages/Messages";

const chats = [
    {id: 1, author: "Maisy Gibson", date: "12:34"},
    {id: 2, author: "Ifrah Mason", date: "14:18"},
    {id: 3, author: "Lani Owen", date: "14:18"},
    {id: 4, author: "Cobie Houghton", date: "14:18"},
    {id: 5, author: "Manahil Molloy", date: "14:18"},
    {id: 6, author: "Misha Valencia", date: "14:18"},
    {id: 7, author: "Juniper Watts", date: "14:18"},

]
const messages = [
    {
        id: 1,
        authorId: 2645,
        name: "Maisy",
        message: "How are you?",
        date: "12:45",
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
    },
    {
        id: 2,
        authorId: 0,
        name: "Author",
        message: "Lorem ipsum dolor sit amet!",
        date: "12:45",
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
    },
    {
        id: 3,
        authorId: 2645,
        name: "Maisy",
        message: "erat est, eu lacin?",
        date: "12:45",
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
    },
    {
        id: 4,
        authorId: 2645,
        name: "Maisy",
        message: "lis viverra rhon!",
        date: "12:45",
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
    }
]

export const Dialogs = () => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.chats}>
                {chats.map(chat => {
                    return <Chats id={chat.id} author={chat.author} date={chat.date}/>
                })}
            </div>
            <div className={s.messagesPage}>
                <div className={s.message}>
                    <Messages messages={messages}/>
                </div>
            </div>
        </div>
    )
}