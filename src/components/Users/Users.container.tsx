import {
    followUserAC,
    setCurrentPageAC, setFetchingAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowUserAC,
    UserType
} from "../../redux/user-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {Users} from "./Users";

class UsersAPIComponent extends React.Component<UsersPropsType> {

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
                    followCallback={this.props.followCallback}
                    unfollowCallback={this.props.unfollowCallback}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    onPageChanged={this.onPageChanged}
                    isFetching={this.props.isFetching}
                />
        )
    }
}

export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type MapDispatchToPropsType = {
    followCallback: (userID: number) => void
    unfollowCallback: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followCallback: (userID: number) => dispatch(followUserAC(userID)),
        unfollowCallback: (userID: number) => dispatch(unFollowUserAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        setFetching: (isFetching: boolean) => dispatch(setFetchingAC(isFetching))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);