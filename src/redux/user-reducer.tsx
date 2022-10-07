import {ActionsTypes} from "./redux-store";


export type UserReducerACTypes =
    ReturnType<typeof followUserAC>
    | ReturnType<typeof unFollowUserAC>
    | ReturnType<typeof setUsersAC>


export type UserType = {
    id: number
    followed: boolean
    avatar: string
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export const followUserAC = (userID: number) => {
    return {
        type: "FOLLOW-USER",
        userID: userID
    } as const
}
export const unFollowUserAC = (userID: number) => {
    return {
        type: "UNFOLLOW-USER",
        userID: userID
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}


let initialState = {
    users: [] as Array<UserType>

}

type initialStateType = typeof initialState

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW-USER": {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : {...u})}
        }
        case "UNFOLLOW-USER": {
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : {...u})}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return {...state}
    }
}