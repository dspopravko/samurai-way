import {ActionsTypes} from "./redux-store";

type ChatMessagesType = {
    id: number
    authorId: number
    name: string
    message: string
    date: string
    avatar: string | null
}
export type ChatHeaderType = {
    id: number
    author: string
    date: string
    chatLogo: string
}
type ChatSavedMessageType = {
    message: string
}
export type ChatType = {
    chatHeader: ChatHeaderType
    chatNewMessage: ChatSavedMessageType
    chatMessages: ChatMessagesType[]
}

export type ChatsReducerACTypes = ReturnType<typeof updateNewMessageAC> | ReturnType<typeof sendMessageAC>

export const sendMessageAC = (chatID: number, avatar: string | null, name: string, messageText: string) => {
    return {
        type: "SEND-MESSAGE",
        chatID: chatID,
        avatar: avatar,
        name: name,
        messageText: messageText
    } as const
}
export const updateNewMessageAC = (message: string, chatID: number) => {
    return {
        type: "UPD-NEW-MESSAGE",
        message: message,
        chatID: chatID
    } as const
}

const initialState = [
    {
        chatHeader: {
            id: 0,
            author: "Maisy Gibson",
            date: "12:46",
            chatLogo: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        chatMessages: [{
            id: 1,
            authorId: 2645,
            name: "Maisy",
            message: "How are you?",
            date: "12:45",
            avatar: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            id: 2,
            authorId: 2645,
            name: "Maisy",
            message: "I miss you",
            date: "12:46",
            avatar: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }],
        chatNewMessage: {
            message: "I'm fine, and you?"
        }
    },
    {
        chatHeader: {
            id: 1,
            author: "Reo Charles",
            date: "09:14",
            chatLogo: "https://images.pexels.com/photos/7646458/pexels-photo-7646458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        chatMessages: [{
            id: 1,
            authorId: 2645,
            name: "Reo",
            message: "Let's go out tomorrow!",
            date: "09:14",
            avatar: "https://images.pexels.com/photos/7646458/pexels-photo-7646458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            id: 2,
            authorId: 2645,
            name: "Reo",
            message: "7pm is ok?",
            date: "09:14",
            avatar: "https://images.pexels.com/photos/7646458/pexels-photo-7646458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }],
        chatNewMessage: {
            message: "Still thinking about it.."
        }
    }, {
        chatHeader: {
            id: 2,
            author: "Loui Kay",
            date: "13:10",
            chatLogo: "https://images.pexels.com/photos/3209639/pexels-photo-3209639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        chatMessages: [{
            id: 1,
            authorId: 2645,
            name: "Loui",
            message: "Here some picks from past weekends /someurl/",
            date: "13:08",
            avatar: "https://images.pexels.com/photos/3209639/pexels-photo-3209639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, {
            id: 2,
            authorId: 2645,
            name: "Loui",
            message: "Choose that's best and chat me",
            date: "13:10",
            avatar: "https://images.pexels.com/photos/3209639/pexels-photo-3209639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }],
        chatNewMessage: {
            message: "Honestly I like all of them"
        }
    },
]

export const chatsReducer = (state: ChatType[] = initialState, action: ActionsTypes): ChatType[] => {
    switch (action.type) {
        case "UPD-NEW-MESSAGE":
            return state.map((c, i) => i === action.chatID ? ({
                ...c,
                chatNewMessage: {...c.chatNewMessage, message: action.message}
            }) : ({...c}))
        case "SEND-MESSAGE":
            if (!action.messageText) return state
            const date = new Intl.DateTimeFormat('en-GB', {hour: "2-digit", minute: "2-digit"}).format(new Date())
            const message = {
                id: state[action.chatID].chatMessages.length,
                authorId: 0,
                name: action.name,
                message: action.messageText,
                date: date,
                avatar: action.avatar ? action.avatar : null
            }
            return state.map((c, i) => i === action.chatID
                ? ({...c,
                    chatNewMessage:
                        {...c.chatNewMessage, message: ""},
                    chatHeader:
                        {...c.chatHeader, date: date},
                    chatMessages:
                        [...c.chatMessages, {...message}]})
                : ({...c}))
        default:
            return state
    }
}