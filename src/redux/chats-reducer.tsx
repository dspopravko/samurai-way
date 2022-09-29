import {ActionsTypes, ChatType} from "./state.js";

export type ChatsReducerACTypes =
    ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof sendMessageAC>

export const sendMessageAC = (chatID: number) => {
    return {
        type: "SEND-MESSAGE",
        chatID: chatID
    } as const
}
export const updateNewMessageAC = (message: string, chatID: number) => {
    return {
        type: "UPD-NEW-MESSAGE",
        message: message,
        chatID: chatID
    } as const
}

export const chatsReducer = (state: ChatType[], action: ActionsTypes) => {

    switch (action.type) {
        case "UPD-NEW-MESSAGE":
            state[action.chatID].chatNewMessage.message = action.message
            return state
        case "SEND-MESSAGE":
            const text = state[action.chatID].chatNewMessage.message.trim()
            const date = new Intl.DateTimeFormat('en-GB', {hour: "2-digit", minute: "2-digit"}).format(new Date())
            if (text) {

                const message = {
                    id: state[action.chatID].chatMessages.length,
                    authorId: 0,
                    name: "Me",
                    message: text,
                    date: date,
                    avatar: "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mvzbp2eS_CYAX-zUd-7&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT9wv1Y8PJ7EDa2zUR_u21sZM9SGsXG2HoBiYbcBnzfUAw&oe=6358D9F8"
                }
                state[action.chatID].chatMessages.push(message)
                state[action.chatID].chatNewMessage.message = ""
                state[action.chatID].chatHeader.date = date
            }
            return state
        default: return state
    }
}