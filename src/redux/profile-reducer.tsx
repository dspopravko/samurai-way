import {ActionsTypes, ProfilePageType} from "./store";

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

let initialState = {
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
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
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
        default:
            return state
    }
}