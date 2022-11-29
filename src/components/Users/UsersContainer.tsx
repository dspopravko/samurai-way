import {follow, getUsersTC, unfollow, UsersStateType} from "../../redux/user-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {AuthStateType} from "../../redux/auth-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getUsers} from "../../redux/user-selector";

class UsersClassComponent extends React.Component<UsersPropsType, UsersStateType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    render() {
        return (
            <Users {...this.props} />
        )
    }
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type MapStateToPropsType = UsersStateType & Pick<AuthStateType, 'isAuth'>

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = ({usersReducer, authReducer}: ReduxStateType): MapStateToPropsType => {
    return {
        users: getUsers(usersReducer),
        pageSize: usersReducer.pageSize,
        totalUsersCount: usersReducer.totalUsersCount,
        currentPage: usersReducer.currentPage,
        isFetchingFollow: usersReducer.isFetchingFollow,
        isFetchingUsers: usersReducer.isFetchingUsers,
        isAuth: authReducer.isAuth
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
    follow,
    unfollow,
    getUsers: getUsersTC
}

const AuthRedirectComponent = withAuthRedirect(UsersClassComponent)
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);