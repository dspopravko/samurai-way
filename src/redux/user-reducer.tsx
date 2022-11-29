import {ActionsTypes} from "./redux-store";
import {UsersAPI} from "../API/API";
import {ThunkDispatch} from "redux-thunk";

export type UserReducerACTypes =
    ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setFetchingUsersAC>
    | ReturnType<typeof setFetchingFollowAC>
    | ReturnType<typeof setUserFollowAC>

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
export const setFetchingUsersAC = (isFetchingUsers: boolean) => {
    return {
        type: "SET-FETCHING-USERS",
        isFetchingUsers
    } as const
}
export const setFetchingFollowAC = (setType: 'fetching' | 'idle', userId: number) => {
    return {
        type: "SET-FETCHING-FOLLOW",
        setType,
        userId
    } as const
}
export const setUserFollowAC = (userId: number, followed: boolean) => {
    console.log(`follow(${followed}) user ${userId} AC`)
    return {
        type: "SET-USER-FOLLOW",
        userId,
        followed
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
        case "SET-USER-FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id !== action.userId ? u : {...u, followed: action.followed})
            }
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
            return action.setType === 'idle' ?
                {...state, isFetchingFollow: state.isFetchingFollow.filter(id => id != action.userId)}
                : {...state, isFetchingFollow: [...state.isFetchingFollow, action.userId]}
        }
        default:
            return {...state}
    }
}
export type userReducerType = ReturnType<typeof usersReducer>

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: ThunkDispatch<UsersStateType, void, UserReducerACTypes>) => {
    dispatch(setFetchingUsersAC(true))
    dispatch(setUsersAC([]))
    dispatch(setCurrentPageAC(currentPage))
    UsersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        }).catch(err => console.log(err))
        .finally(() => {
            dispatch(setFetchingUsersAC(false))
        })
}

export const follow = (id: number) => {
    return (dispatch: ThunkDispatch<UsersStateType, void, UserReducerACTypes>) => {
        dispatch(setFetchingFollowAC('fetching', id))
        UsersAPI.followUser(id)
            .then(r => {
                r && dispatch(setUserFollowAC(id, true))
            })
            .finally(() => {
                    dispatch(setFetchingFollowAC('idle', id))
                }
            )
    }
}
export const unfollow = (id: number) => {
    return (dispatch: ThunkDispatch<UsersStateType, void, UserReducerACTypes>) => {
        dispatch(setFetchingFollowAC('fetching', id))
        UsersAPI.unfollowUser(id)
            .then(r => {
                r && dispatch(setUserFollowAC(id, false))
            })
            .finally(() => {
                    dispatch(setFetchingFollowAC('idle', id))
                }
            )
    }
}