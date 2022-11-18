import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {profileReducer, ProfileReducerACTypes} from "./profile-reducer";
import {chatsReducer, ChatsReducerACTypes} from "./chats-reducer";
import {UserReducerACTypes, usersReducer} from "./user-reducer";
import {authReducer, AuthReducerACTypes} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type ActionsTypes = ProfileReducerACTypes | ChatsReducerACTypes | UserReducerACTypes | AuthReducerACTypes
export type ReduxStateType = ReturnType<typeof rootReducer>

export type StoreType = Store<ReduxStateType, ActionsTypes>

const rootReducer = combineReducers( {
    profileReducer,
    chatsReducer,
    usersReducer,
    authReducer
})

export const store: StoreType = createStore(rootReducer, applyMiddleware(thunkMiddleware))