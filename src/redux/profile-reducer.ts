import {ActionsTypes, AppRootStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {UsersApi} from "../api/users-api";
import {ProfileApi} from "../api/profile-api";

export type PostType = {
    id: number
    name: string
    message: string
    avatar: string | null;
    likes: number
    myLike: boolean
    date: string
}
export type ProfileType = { // api TYPE
    aboutMe?: string | null;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription?: string | null;
    fullName: string;
    userId: number;
    photos: Photos;
    status: string
}
export type ContactsType = { // api TYPE
    facebook?: string | null;
    website?: string | null;
    vk?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    youtube?: string | null;
    github?: string | null;
    mainLink?: string | null;
}
export type Photos = { // api TYPE
    small?: string | null;
    large?: string | null;
}

export type ProfileReducerACTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof postInputHandler>
    | ReturnType<typeof addLike>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setFetchingProfileAC>
    | ReturnType<typeof setUserFollowAC>
    | ReturnType<typeof setUserStatusAC>

export const addPost = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage
    } as const
}
export const postInputHandler = (postInput: string) => {
    return {
        type: "POST-INPUT-HANDLER",
        postMessage: postInput
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
    postInput: "This input is state controlled",
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
                ...state, postInput: "", posts: [{
                    id: state.posts.length,
                    name: state.profile.fullName,
                    message: action.postMessage.trim(),
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
        case "POST-INPUT-HANDLER":
            return {...state, postInput: action.postMessage}
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
    ProfileApi.getUser(userId)
        .then(data => {dispatch(setUserProfile(data))})
        .finally(()=> {dispatch(setFetchingProfileAC(false))})
    UsersApi.isUserFollowed(+userId).then(data => {
        dispatch(setUserFollowAC(userId, data))
    })
}

export const getStatus = (userId: number) => (dispatch: ThunkDispatch<ProfileStateType, void, ProfileReducerACTypes>) => {
    dispatch(setFetchingProfileAC(true))
    ProfileApi.getStatus(userId)
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
    ProfileApi.updateStatus(status)
        .then(data => {
            data.status === 200 && dispatch(setUserStatusAC(status))
        })
        .finally(()=> {
        dispatch(setFetchingProfileAC(false))
    })
}
export const updatePhoto = (photoFile: File) => (dispatch: ThunkDispatch<ProfileStateType, void, ProfileReducerACTypes>, getState: ()=>AppRootStateType) => {
    dispatch(setFetchingProfileAC(true))
    const state = getState()
    ProfileApi.updatePhoto(photoFile)
        .then(data => {
            data.status === 200 && dispatch(getProfileInfo(state.profileReducer.profile.userId))
        })
        .finally(()=> {
        dispatch(setFetchingProfileAC(false))
    })
}