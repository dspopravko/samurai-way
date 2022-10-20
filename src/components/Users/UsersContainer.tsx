import {
    follow,
    setCurrentPage, setFetching, setTotalUsersCount,
    setUsers,
    unfollow, UsersStateType,
    UserType
} from "../../redux/user-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {Users} from "./Users";

class UsersClassComponent extends React.Component<UsersPropsType, UsersStateType> {
    componentDidMount() {
        this.props.setFetching(true)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setFetching(false)
            })
    }
    onPageChanged = (n: number) => {
        this.props.setFetching(true)
    console.log(this.props.isFetching)
        this.props.setUsers([])
        this.props.setCurrentPage(n)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${n}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFetching(false)
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
                    isFetching={this.props.isFetching}
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
    setFetching: (isFetching: boolean) => void
}

export type UsersPropsType = UsersStateType & MapDispatchToPropsType

const mapStateToProps = ({usersReducer}: ReduxStateType): UsersStateType => {
    return {
        users: usersReducer.users,
        pageSize: usersReducer.pageSize,
        totalUsersCount: usersReducer.totalUsersCount,
        currentPage: usersReducer.currentPage,
        isFetching: usersReducer.isFetching
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setFetching
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);