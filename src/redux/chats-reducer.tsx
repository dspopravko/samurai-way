import {ActionsTypes, ChatType} from "./store.js";

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

export const chatsReducer = (state: ChatType[] = initialState, action: ActionsTypes) => {

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
        default:
            return state
    }
}