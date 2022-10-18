import {ActionsTypes} from "./redux-store";


export type UserReducerACTypes =
    ReturnType<typeof followUserAC>
    | ReturnType<typeof unFollowUserAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>


export type UserType = {
    name: string
    id: number
    uniqueUrlName?: string | null
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    followed: boolean
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
export const setCurrentPageAC = (page: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        page
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 20,
    currentPage: 1
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
            return {...state, users: [...action.users]}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.page}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return {...state}
    }
}