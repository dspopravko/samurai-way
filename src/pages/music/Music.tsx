import React from "react";
import s from "./Music.module.css"
import {messagesAPI} from "../../api/message-api";

export const Music = (props: any) => {

    const getMessages = async () => {
        const res = await messagesAPI.getMessages(27021)
        console.log(res)
    }
    const raiseDialog = async () => {
        const res = await messagesAPI.raiseDialog(27021)
        console.log(res.data)
    }
    const getAllDialogs = async () => {
        const res = await messagesAPI.getAllDialogs()
        console.log(res)
    }
    const sendMessage = async () => {
        const res = await messagesAPI.sendMessage(27021, 'Another test message')
        console.log(res.data.data.message.addedAt)
    }
    const isViewedMessage = async () => {
        const res = await messagesAPI.isViewedMessage('e4163b61-c6ba-41a0-9780-a8438ddd3220')
        console.log(res.data)
    }

    const newMessagesCount = async () => {
        const res = await messagesAPI.newMessagesCount()
        console.log(res.data)
    }

    return (
        <div>
            <button onClick={()=> { raiseDialog()  }}>dialogToResent</button>
            <button onClick={()=> { getAllDialogs() }}>getAllDialogs</button>
            <button onClick={()=> { getMessages()  }}>getMessages</button>
            <button onClick={()=> { sendMessage() }}>sendMessage</button>
            <button onClick={()=> { isViewedMessage() }}>isViewedMessage</button>
            <button onClick={()=> { newMessagesCount() }}>newMessagesCount</button>
        </div>
    )
}