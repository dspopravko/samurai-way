import {ActionsTypes, AppThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type AppReducerACTypes =
    ReturnType<typeof setAppStatus>

const setAppStatus = (status: AppStatus) => {
    return {
        type: "SET-APP-STATUS",
        status
    } as const
}

export enum AppStatus {
    pending,
    initialized
}

export type AppStateType = {
    initialized: AppStatus
}


let initialState = {
    initialized: AppStatus.pending
}

export type AuthStateType = typeof initialState

export const AppReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case "SET-APP-STATUS": {
            return {
                ...state,
                initialized: action.status
            }
        }
        default:
            return {...state}
    }
}

export const initializeApp = (): AppThunkType => (dispatch) => {
    const getAuth = dispatch(getAuthUserData());
    Promise.all([getAuth])
        .then(() => {
            dispatch(setAppStatus(AppStatus.initialized))
        })
}