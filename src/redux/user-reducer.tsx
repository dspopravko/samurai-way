import {ActionsTypes} from "./redux-store";


export type UserReducerACTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setFetching>


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

export const follow = (userID: number) => {
    return {
        type: "FOLLOW-USER",
        userID
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: "UNFOLLOW-USER",
        userID
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        page
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}
export const setFetching = (isFetching: boolean) => {
    return {
        type: "SET-FETCHING",
        isFetching
    } as const
}


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 4,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true
}

export type UsersStateType = typeof initialState

export const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes): UsersStateType => {
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
        case "SET-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return {...state}
    }
}