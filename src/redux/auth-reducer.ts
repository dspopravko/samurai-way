import {ActionsTypes} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {authAPI} from "../API/API";

export type AuthReducerACTypes =
    ReturnType<typeof setUser>
    | ReturnType<typeof setFetching>

export type AuthAPIType = { //API Type
    data: {
        id: number
        login: string
        email: string
    }
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

export const setUser = (payload: AuthAPIType, isFetchingAuth: boolean, isAuth: boolean) => {
    return {
        type: "AUTH-USER",
        data: {
            id: payload.data.id,
            login: payload.data.login,
            email: payload.data.email
        },
        messages: payload.messages,
        fieldsErrors: payload.fieldsErrors,
        resultCode: payload.resultCode,
        isFetchingAuth: isFetchingAuth,
        isAuth: isAuth
    } as const
}
export const setFetching = (isFetchingAuth: boolean) => {
    return {
        type: "SET-FETCHING",
        isFetchingAuth
    } as const
}

let initialState = {
    data: {
        id: 0,
        login: 'samurai',
        email: 'fake@email.com',
    },
    messages: [''],
    fieldsErrors: [''],
    isAuth: false,
    isFetchingAuth: true
}

export type AuthStateType = typeof initialState

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    // console.log(action)
    switch (action.type) {
        case 'AUTH-USER': {
            console.log({
                ...state,
                data: action.data,
                messages: [...action.messages],
                fieldsErrors: [...action.fieldsErrors],
                isAuth: action.isAuth,
                isFetchingAuth: action.isFetchingAuth,
            })
            return {
                ...state,
                data: action.data,
                messages: [...action.messages],
                fieldsErrors: [...action.fieldsErrors],
                isAuth: action.isAuth,
                isFetchingAuth: action.isFetchingAuth,
            }
        }
        case "SET-FETCHING": {
            return {...state, isFetchingAuth: action.isFetchingAuth}
        }
        default:
            return {...state}
    }
}

export const getAuthUserData = () => (dispatch: ThunkDispatch<AuthStateType, void, AuthReducerACTypes>) => {
    console.log('getAuthUser Thunk!')
    authAPI.me().then(response => {
        console.log('Authenticated')
        if (response.resultCode === 0) dispatch(setUser(response, false, true))
    })
}