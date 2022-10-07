import {ActionsTypes} from "./redux-store";

export type PostType = {
    id: number
    name: string
    message: string
    avatar: string
    likes: number
    myLike: boolean
    date: string
}
export type PageHeaderType = {
    id: number
    avatar: string
    name: string
    dateOfBirth: string
    postInput: string
}
export type ProfilePageType = {
    pageHeader: PageHeaderType,
    posts: PostType[]
}

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
        postID
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
        id: 2,
        name: "Firat Arellano",
        message: "Great wallpaper!",
        avatar: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 56,
        myLike: false,
        date: "12.03.18 15:54"
    }, {
        id: 1,
        name: "Lance Munro",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ipsum sit amet semper faucibus. Aenean eu vestibulum orci, nec vestibulum nisi. Proin dapibus diam neque, sed malesuada ex euismod et. Quisque ex risus, consequat sit amet mi ac, lobortis tincidunt erat. Donec accumsan quis magna sed feugiat. Nulla elementum metus id odio dapibus consectetMaecenas vitae nibh in dolor malesuada bibendum aliquam ac leo.eu congue nulla feugiat sit amet. Duis at aliquet lacus.",
        avatar: "https://images.pexels.com/photos/2531551/pexels-photo-2531551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 45,
        myLike: false,
        date: "12.03.18 15:54"
    }, {
        id: 0,
        name: "Maisy Gibson",
        message: "This post id is 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ipsum sit amet semper faucibus. Aenean eu vestibulum orci, nec vestibulum nisi. Proin dapibus diam neque, sed malesuada ex euismod et. Quisque ex risus, consequat sit amet mi ac, lobortis tincidunt erat. Donec acc umsan quis magna sed feugiat. Nulla elementum metus id odio dapibus consectetMaecenas vitae nibh in dolor malesuada bibendum aliquam ac leo.eu congue nulla feugiat sit amet. Duis at aliquet lacus.",
        avatar: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 65,
        myLike: false,
        date: "12.03.18 15:54"
    }]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state, pageHeader: {...state.pageHeader, postInput: ""}, posts: [{
                    id: state.posts.length,
                    name: state.pageHeader.name,
                    message: state.pageHeader.postInput.trim(),
                    avatar: state.pageHeader.avatar,
                    likes: 0,
                    myLike: false,
                    date: new Intl.DateTimeFormat('en-GB', {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                    }).format(new Date())
                }, ...state.posts]
            }
        case "POST-INPUT-HANDLER":
            return {...state, pageHeader: {...state.pageHeader, postInput: action.postMessage}}
        case "ADD-LIKE":
            const newPosts = state.posts.map(p => p.id !== action.postID ? p : {
                ...p,
                myLike: !p.myLike
            })
            return {...state, posts: [...newPosts]}
        default:
            return {...state}
    }
}