import {followUserAC, setUsersAC, unFollowUserAC, UserType} from "../../redux/user-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";

type MapStateToPropsType = ({users: UserType[]})
type MapDispatchToPropsType = {
    followCallback: (userID: number) => void
    unfollowCallback: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({users: state.usersReducer.users})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followCallback: (userID: number) => dispatch(followUserAC(userID)),
        unfollowCallback: (userID: number) => dispatch(unFollowUserAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);