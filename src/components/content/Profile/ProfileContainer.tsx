import React from "react";
import {ReduxStateType} from "../../../redux/redux-store";
import {Profile} from "./Profile";
import {
    ProfileStateType,
    ProfileType,
    setUserProfile, setFetchingProfileAC, getProfileInfo
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AuthStateType} from "../../../redux/auth-reducer";
import {UsersStateType, follow, unfollow} from "../../../redux/user-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class ProfileClassComponent extends React.Component<ProfilePropsType, ProfileStateType> {
    componentDidMount() {
        const { data, match, isAuth, getProfileInfo } = {...this.props}
        match.params.userId ?
            getProfileInfo(+match.params.userId)
            : isAuth && getProfileInfo(data.id)

    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<ProfileStateType>, snapshot?: any) {
        const { match, profile, data, getProfileInfo } = {...this.props}
        /* load profileinfo of user unless otherwise specified in the URL */
        if (!match.params.userId && profile.userId !== data.id) {
            getProfileInfo(data.id)
        }

    }

    render() {

        const {
            data,
            profile,
            isFollowed,
            isFetchingProfile,
            follow,
            unfollow
        } = {...this.props}

        return (
            <Profile
                isFollowed={isFollowed}
                isMyProfile={data.id === profile.userId}
                profile={profile}
                isFetchingProfile={isFetchingProfile}
                follow={follow}
                unfollow={unfollow}
            />
        )
    }
}

export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    setFetchingProfileAC: (isFetchingProfile: boolean) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getProfileInfo: (userId: number) => void
}
export type MapStateToPropsType =
    ProfileStateType
    & Pick<AuthStateType, 'data' | 'isAuth'>
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
        isAuth: authReducer.isAuth,
        users: usersReducer.users,
        isFetchingFollow: usersReducer.isFetchingFollow,
        isFetchingProfile: profileReducer.isFetchingProfile
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    setUserProfile,
    setFetchingProfileAC,
    getProfileInfo,
    follow,
    unfollow
}

const WithUrlDataContainerComponent = withRouter(ProfileClassComponent)
const AuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent)
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);