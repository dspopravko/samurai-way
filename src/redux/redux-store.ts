import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {profileReducer, ProfileReducerACTypes} from "./profile-reducer";
import {chatsReducer, ChatsReducerACTypes} from "./chats-reducer";

type ActionsTypes = ProfileReducerACTypes | ChatsReducerACTypes
type ReduxStateType = ReturnType<typeof reducers>

export type StoreType = Store<ReduxStateType, ActionsTypes>

const reducers = combineReducers({
    profileReducer,
    chatsReducer
})

export const store: StoreType = createStore(reducers)