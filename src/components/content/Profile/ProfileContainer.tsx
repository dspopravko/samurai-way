import React from "react";
import {ReduxStateType} from "../../../redux/redux-store";
import {Profile} from "./Profile";
import {
    ProfileStateType,
    ProfileType,
    setUserProfile
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthStateType} from "../../../redux/auth-reducer";
import {UsersAPI} from "../../../API/API";
import {follow, unfollow, UsersStateType} from "../../../redux/user-reducer";


class ProfileClassComponent extends React.Component<ProfilePropsType, ProfileStateType> {
    componentDidMount() {
        const userId = this.props.match.params.userId || this.props.data.id //userId or myId
        console.log(this.props.data.id)
        UsersAPI.getUser(+userId).then(data => {
                this.props.setUserProfile(data)
            })
        UsersAPI.isUserFollowed(+userId).then(data => {
            data ? this.props.follow(+userId) : this.props.unfollow(+userId)
        })
    }
    render() {
        return (
            <Profile
                isFollowed={this.props.isFollowed}
                isMyProfile={!this.props.match.params.userId}
                profile={this.props.profile}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        )
    }
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUserProfile: (profile: ProfileType) => void
}
export type MapStateToPropsType = ProfileStateType & Omit<AuthStateType, "resultCode" | "fieldsErrors" | "messages"> & Omit<UsersStateType, 'fieldsErrors' | 'pageSize' | 'currentPage' | 'totalUsersCount'>

type PathParamsType = { userId: string | undefined } //path for route
export type ProfileOwnPropsType = MapStateToPropsType & MapDispatchToPropsType //state & dispatch
type ProfilePropsType = RouteComponentProps<PathParamsType> & ProfileOwnPropsType //route & state & dispatch

const mapStateToProps = ({profileReducer, authReducer, usersReducer}: ReduxStateType): MapStateToPropsType => {
    return {
        isFollowed: profileReducer.isFollowed,
        users: usersReducer.users,
        profile: profileReducer.profile,
        posts: profileReducer.posts,
        postInput: profileReducer.postInput,
        isFetchingUsers: authReducer.isFetchingUsers,
        data: authReducer.data,
        isFetchingFollow: usersReducer.isFetchingFollow
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setUserProfile,
    follow,
    unfollow
}

const WithUrlDataContainerComponent = withRouter(ProfileClassComponent)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);