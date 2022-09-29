import {ActionsTypes, ProfilePageType} from "./state.js";

export type ProfileReducerACTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof postInputHandlerAC>
    | ReturnType<typeof addLikeAC>

export const addPostAC = () => ({type: "ADD-POST"}) as const
export const postInputHandlerAC = (postInput: string) => {
    return {
        type: "POST-INPUT-HANDLER",
        postMessage: postInput
    } as const
}
export const addLikeAC = (postID: number) => {
    return {
        type: "ADD-LIKE",
        postID: postID
    } as const
}

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const text = state.pageHeader.postInput.trim()
            if (text) {
                state.posts.unshift({
                    id: state.posts.length,
                    name: "My name",
                    message: text,
                    avatar: "myavatar",
                    likes: 0,
                    myLike: false,
                    date: new Date().getTime().toString()
                })
                state.pageHeader.postInput = ""
            }
            return state
        case "POST-INPUT-HANDLER":
            state.pageHeader.postInput = action.postMessage

            return state
        case "ADD-LIKE":
            state.posts = state.posts.map(p => p.id !== action.postID ? p : {
                ...p,
                myLike: !p.myLike
            })
            return state
        default: return state
    }
}