import {ActionsTypes} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {ProfileAPI, UsersAPI} from "../API/API";

export type PostType = {
    id: number
    name: string
    message: string
    avatar: string | null;
    likes: number
    myLike: boolean
    date: string
}

export type ProfileType = { // API TYPE
    aboutMe?: string | null;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription?: string | null;
    fullName: string;
    userId: number;
    photos: Photos;
    status: string
}

export type ContactsType = { // API TYPE
    facebook?: string | null;
    website?: string | null;
    vk?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    youtube?: string | null;
    github?: string | null;
    mainLink?: string | null;
}

export type Photos = { // API TYPE
    small?: string | null;
    large?: string | null;
}

export type ProfileReducerACTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof addLike>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setFetchingProfileAC>
    | ReturnType<typeof setUserFollowAC>
    | ReturnType<typeof setUserStatusAC>

export const addPost = (post: string) => {
    return {
        type: "ADD-POST",
        post: post
    } as const
}
export const addLike = (postID: number) => {
    return {
        type: "ADD-LIKE",
        postID: postID
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setFetchingProfileAC = (isFetchingProfile: boolean) => {
    return {
        type: "SET-FETCHING-PROFILE",
        isFetchingProfile
    } as const
}
export const setUserFollowAC = (userId: number, followed: boolean) => {
    return {
        type: "SET-USER-FOLLOW",
        userId,
        followed
    } as const
}
export const setUserStatusAC = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        status
    } as const
}


let initialState = {
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "Default Name",
        userId: 2,
        photos: {
            small: null,
            large: null
        },
        status: 'Default status'
    } as ProfileType,
    posts: [{
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
    }] as PostType[],
    isFollowed: false,
    isFetchingProfile: true
}

export type ProfileStateType = typeof initialState

export const profileReducer = (state: ProfileStateType = initialState, action: ActionsTypes): ProfileStateType => {
    switch (action.type) {
        case "SET-USER-FOLLOW": {
            return { ...state,isFollowed: action.followed }
        }
        case "ADD-POST":
            return {
                ...state, posts: [{
                    id: state.posts.length,
                    name: state.profile.fullName,
                    message: action.post.trim(),
                    avatar: state.profile.photos.small || null,
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
        case "ADD-LIKE":
            const newPosts = state.posts.map(p => p.id !== action.postID ? p : {
                ...p,
                myLike: !p.myLike
            })
            return {...state, posts: [...newPosts]}
        case "SET-USER-PROFILE":
            return {...state, profile: {...state.profile, ...action.profile}}
        case "SET-FETCHING-PROFILE": {
            return {...state, isFetchingProfile: action.isFetchingProfile}
        }
        case "SET-USER-STATUS": {
            return {...state, profile: {...state.profile, status: action.status}}
        }
        default:
            return {...state}
    }
}

export const getProfileInfo = (userId: number) => (dispatch: ThunkDispatch<ProfileStateType, void, ProfileReducerACTypes>) => {
    dispatch(setFetchingProfileAC(true))
    ProfileAPI.getUser(userId)
        .then(data => {dispatch(setUserProfile(data))})
        .finally(()=> {dispatch(setFetchingProfileAC(false))})
    UsersAPI.isUserFollowed(+userId).then(data => {
        dispatch(setUserFollowAC(userId, data))
    })
}

export const getStatus = (userId: number) => (dispatch: ThunkDispatch<ProfileStateType, void, ProfileReducerACTypes>) => {
    dispatch(setFetchingProfileAC(true))
    ProfileAPI.getStatus(userId)
        .then(data => {
            console.log(data)
            dispatch(setUserStatusAC(data.data))
        })
        .finally(()=> {
        dispatch(setFetchingProfileAC(false))
    })
}
export const updateStatus = (status: string) => (dispatch: ThunkDispatch<ProfileStateType, void, ProfileReducerACTypes>) => {
    dispatch(setFetchingProfileAC(true))
    ProfileAPI.updateStatus(status)
        .then(data => {
            data.status === 200 && dispatch(setUserStatusAC(status))
        })
        .finally(()=> {
        dispatch(setFetchingProfileAC(false))
    })
}