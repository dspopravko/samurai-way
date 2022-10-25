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
        const {setUserProfile, follow, unfollow, data, match, profile, isFollowed, posts, postInput, children, location, staticContext, history, users, isFetchingFollow} = {...this.props}

        const userId = match.params.userId || data.id //userId or myId
        console.log(data.id)
        UsersAPI.getUser(+userId).then(data => {
                setUserProfile(data)
            })
        UsersAPI.isUserFollowed(+userId).then(data => {
            data ? follow(+userId) : unfollow(+userId)
        })
    }
    render() {
        const {follow, unfollow, data, match, profile, isFollowed, posts, postInput, children, location, staticContext, history, users, isFetchingFollow} = {...this.props}
        return (
            <Profile
                isFollowed={isFollowed}
                isMyProfile={data.id === profile.userId}
                profile={profile}
                follow={follow}
                unfollow={unfollow}
            />
        )
    }
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUserProfile: (profile: ProfileType) => void
}
export type MapStateToPropsType =
    ProfileStateType
    & Pick<AuthStateType, 'data'>
    & Pick<UsersStateType, 'users' | 'isFetchingFollow'>

type PathParamsType = { userId: string | undefined } //path for route
export type ProfileOwnPropsType = MapStateToPropsType & MapDispatchToPropsType //state & dispatch
type ProfilePropsType = RouteComponentProps<PathParamsType> & ProfileOwnPropsType //route & state & dispatch

const mapStateToProps = ({profileReducer, authReducer, usersReducer}: ReduxStateType): MapStateToPropsType => {
    return {
        isFollowed: profileReducer.isFollowed,
        profile: profileReducer.profile,
        posts: profileReducer.posts,
        postInput: profileReducer.postInput,
        data: authReducer.data,
        users: usersReducer.users,
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