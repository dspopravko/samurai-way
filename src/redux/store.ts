import {profileReducer, ProfileReducerACTypes} from "./profile-reducer";
import {chatsReducer, ChatsReducerACTypes} from "./chats-reducer";

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
type ActionsTypes = ProfileReducerACTypes | ChatsReducerACTypes

const store: StoreType = {
    _state: {
        profilePage: {
            pageHeader: {
                id: 0,
                avatar: "https://images.pexels.com/photos/792725/pexels-photo-792725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "Ellie Martins",
                dateOfBirth: "12051996",
                postInput: "This input field is state-controlled"
            }, posts: [{
                id: 1,
                name: "Firat Arellano",
                message: "Great wallpaper!",
                avatar: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                likes: 56,
                myLike: false,
                date: "12.03.18 15:54"
            }, {
                id: 2,
                name: "Lance Munro",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ipsum sit amet semper faucibus. Aenean eu vestibulum orci, nec vestibulum nisi. Proin dapibus diam neque, sed malesuada ex euismod et. Quisque ex risus, consequat sit amet mi ac, lobortis tincidunt erat. Donec accumsan quis magna sed feugiat. Nulla elementum metus id odio dapibus consectetMaecenas vitae nibh in dolor malesuada bibendum aliquam ac leo.eu congue nulla feugiat sit amet. Duis at aliquet lacus.",
                avatar: "https://images.pexels.com/photos/2531551/pexels-photo-2531551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                likes: 45,
                myLike: true,
                date: "12.03.18 15:54"
            }, {
                id: 3,
                name: "Maisy Gibson",
                message: "This post id is 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ipsum sit amet semper faucibus. Aenean eu vestibulum orci, nec vestibulum nisi. Proin dapibus diam neque, sed malesuada ex euismod et. Quisque ex risus, consequat sit amet mi ac, lobortis tincidunt erat. Donec acc umsan quis magna sed feugiat. Nulla elementum metus id odio dapibus consectetMaecenas vitae nibh in dolor malesuada bibendum aliquam ac leo.eu congue nulla feugiat sit amet. Duis at aliquet lacus.",
                avatar: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                likes: 65,
                myLike: false,
                date: "12.03.18 15:54"
            }]
        },
        chats: [
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
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback: () => void) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.chats = chatsReducer(this._state.chats, action);
        this._onChange()
    }
}

type ChatMessagesType = {
    id: number
    authorId: number
    name: string
    message: string
    date: string
    avatar?: string
}
type ChatHeaderType = {
    id: number
    author: string
    date: string
    chatLogo: string
}
type ChatNewMessageTextType = {
    message: string
}
type ChatType = {
    chatHeader: ChatHeaderType
    chatNewMessage: ChatNewMessageTextType
    chatMessages: ChatMessagesType[]
}
type PostType = {
    id: number
    name: string
    message: string
    avatar: string
    likes: number
    myLike: boolean
    date: string
}
type PageHeaderType = {
    id: number
    avatar: string
    name: string
    dateOfBirth: string
    postInput: string
}
type ProfilePageType = {
    pageHeader: PageHeaderType,
    posts: PostType[]
}
type RootStateType = {
    profilePage: ProfilePageType,
    chats: ChatType[]
}

// window.state = state;

export default store