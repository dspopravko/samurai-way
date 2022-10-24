import {
    follow,
    setCurrentPage, setFetchingFollow, setFetchingUsers, setTotalUsersCount,
    setUsers,
    unfollow, UsersStateType,
    UserType
} from "../../redux/user-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {UsersAPI} from "../../API/API";

class UsersClassComponent extends React.Component<UsersPropsType, UsersStateType> {
    componentDidMount() {
        this.props.setFetchingUsers(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setFetchingUsers(false)
            })
    }

    onPageChanged = (n: number) => {
        this.props.setFetchingUsers(true)
        this.props.setUsers([])
        this.props.setCurrentPage(n)

        UsersAPI.getUsers(n, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setFetchingUsers(false)
        })

    }

    render() {
        return (
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged}
                isFetchingUsers={this.props.isFetchingUsers}
                isFetchingFollow={this.props.isFetchingFollow}
                setFetchingFollow={this.props.setFetchingFollow}
            />
        )
    }
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setFetchingUsers: (isFetching: boolean) => void
    setFetchingFollow: (setType: 'post' | 'delete', userId: number) => void
}

export type UsersPropsType = UsersStateType & MapDispatchToPropsType

const mapStateToProps = ({usersReducer}: ReduxStateType): UsersStateType => {
    return {
        users: usersReducer.users,
        pageSize: usersReducer.pageSize,
        totalUsersCount: usersReducer.totalUsersCount,
        currentPage: usersReducer.currentPage,
        isFetchingFollow: usersReducer.isFetchingFollow,
        isFetchingUsers: usersReducer.isFetchingUsers
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetchingUsers,
    setFetchingFollow
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);