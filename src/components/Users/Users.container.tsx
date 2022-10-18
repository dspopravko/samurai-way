import {
    followUserAC,
    setCurrentPageAC, setTotalUsersCountAC,
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

    componentDidMount () {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(response.data.items)
        })
    }
    onPageChanged = (n: number) => {
        this.props.setCurrentPage(n)
        console.log(`https://social-network.samuraijs.com/api/1.0/users?/page=${n}&count=${this.props.pageSize}`)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${n}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        return (
            <Users
                setUsers={this.props.setUsers}
                users={this.props.users}
                pageSize={this.props.pageSize}
                followCallback={this.props.followCallback}
                unfollowCallback={this.props.unfollowCallback}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchToPropsType = {
    followCallback: (userID: number) => void
    unfollowCallback: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followCallback: (userID: number) => dispatch(followUserAC(userID)),
        unfollowCallback: (userID: number) => dispatch(unFollowUserAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);