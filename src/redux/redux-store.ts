import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer, ProfileReducerACTypes} from "./profile-reducer";
import {chatsReducer, ChatsReducerACTypes} from "./chats-reducer";
import {UserReducerACTypes, usersReducer} from "./user-reducer";
import {authReducer, AuthReducerACTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {AppReducer, AppReducerACTypes} from "./app-reducer";

export type ActionsTypes = ProfileReducerACTypes | ChatsReducerACTypes | UserReducerACTypes | AuthReducerACTypes | AppReducerACTypes
export type ReduxStateType = ReturnType<typeof rootReducer>

export type StoreType = Store<ReduxStateType, ActionsTypes>

const rootReducer = combineReducers( {
    profileReducer,
    chatsReducer,
    usersReducer,
    authReducer,
    AppReducer
})

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, ReduxStateType, unknown, ActionsTypes>
export const store: StoreType = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>
