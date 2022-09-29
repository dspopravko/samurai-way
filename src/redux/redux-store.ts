import {combineReducers, createStore, Store} from "redux";
import {profileReducer, ProfileReducerACTypes} from "./profile-reducer";
import {chatsReducer, ChatsReducerACTypes} from "./chats-reducer";

export type ActionsTypes = ProfileReducerACTypes | ChatsReducerACTypes
export type RootState = typeof reducers
export type ReduxStateType = ReturnType<RootState>

export type StoreType = Store<ReduxStateType, ActionsTypes>

export let reducers = combineReducers({
    profileReducer,
    chatsReducer
})

export let store: StoreType = createStore(reducers)
