import {userReducerType} from "./user-reducer";
import {createSelector} from "reselect";

const getUsersSelector = (state: userReducerType) => {
    return state.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})