import {ActionsTypes} from "./redux-store";

export type AuthReducerACTypes =
    ReturnType<typeof authUser>
    | ReturnType<typeof setFetching>

export type AuthType = { //API Type
    data: {
        id: number
        login: string
        email: string
    }
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

export const authUser = (payload: AuthType, isFetchingAuth: boolean) => {
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
        isFetchingAuth: isFetchingAuth
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
    resultCode: 1,
    isFetchingAuth: true
}

export type AuthStateType = typeof initialState

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case 'AUTH-USER': {
            return {
                ...state,
                data: action.data,
                messages: [...action.messages],
                fieldsErrors: [...action.fieldsErrors],
                resultCode: action.resultCode,
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