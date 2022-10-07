import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {profileReducer, ProfileReducerACTypes} from "./profile-reducer";
import {chatsReducer, ChatsReducerACTypes} from "./chats-reducer";
import {UserReducerACTypes, usersReducer} from "./user-reducer";

export type ActionsTypes = ProfileReducerACTypes | ChatsReducerACTypes | UserReducerACTypes
export type ReduxStateType = ReturnType<typeof rootReducer>

export type StoreType = Store<ReduxStateType, ActionsTypes>

const rootReducer = combineReducers({
    profileReducer,
    chatsReducer,
    usersReducer
})

export const store: StoreType = createStore(rootReducer)