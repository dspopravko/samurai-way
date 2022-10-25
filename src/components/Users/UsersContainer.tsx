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
        const { setFetchingUsers, setUsers, setTotalUsersCount, currentPage, pageSize} = {...this.props}

        setFetchingUsers(true)
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                setUsers(data.items)
                setTotalUsersCount(data.totalCount)
            }).finally(() => {
            setFetchingUsers(false)
        })
    }

    onPageChanged = (n: number) => {
        const { setFetchingUsers, setUsers, setCurrentPage,pageSize} = {...this.props}

        setFetchingUsers(true)
        setUsers([])
        setCurrentPage(n)

        UsersAPI.getUsers(n, pageSize).then(data => {
            setUsers(data.items)
        }).finally(() => {
            setFetchingUsers(false)
        })

    }

    render() {
        return (
            <Users
                {...this.props}
                onPageChanged={this.onPageChanged}
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