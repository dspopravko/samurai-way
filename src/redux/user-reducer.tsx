import {ActionsTypes} from "./redux-store";


export type UserReducerACTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setFetchingUsers>
    | ReturnType<typeof setFetchingFollow>


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
export const setFetchingUsers = (isFetchingUsers: boolean) => {
    return {
        type: "SET-FETCHING-USERS",
        isFetchingUsers
    } as const
}
export const setFetchingFollow = (setType: 'post' | 'delete', userId: number) => {
    return {
        type: "SET-FETCHING-FOLLOW",
        setType,
        userId
    } as const
}


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 4,
    totalUsersCount: 20,
    currentPage: 1,
    isFetchingUsers: true,
    isFetchingFollow: [0]
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
        case "SET-FETCHING-USERS": {
            return {...state, isFetchingUsers: action.isFetchingUsers}
        }
        case "SET-FETCHING-FOLLOW": {
            return action.setType === 'delete' ?
                {...state, isFetchingFollow: state.isFetchingFollow.filter(id => id != action.userId)}
                : {...state, isFetchingFollow: [...state.isFetchingFollow, action.userId]}
        }
        default:
            return {...state}
    }
}