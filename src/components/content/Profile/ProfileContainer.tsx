import React from "react";
import {ReduxStateType} from "../../../redux/redux-store";
import * as axios from "axios";
import {Profile} from "./Profile";
import {
    addLike,
    addPost,
    postInputHandler,
    ProfileStateType,
    ProfileType,
    setUserProfile
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileClassComponent extends React.Component<ProfilePropsType, ProfileStateType> {
    componentDidMount() {
        const userId = this.props.match.params.userId || 26121
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <Profile
                profile={this.props.profile}
                addLike={this.props.addLike}
                addPost={this.props.addPost}
                postInputHandler={this.props.postInputHandler}
            />
        )
    }
}

export type MapDispatchToPropsType = {
    addPost: () => void
    postInputHandler: (postInput: string) => void
    addLike: (postID: number) => void
    setUserProfile: (profile: ProfileType) => void
}

type PathParamsType = { userId: string | undefined } //path for route
type ProfilePropsType = RouteComponentProps<PathParamsType> & ProfileOwnPropsType //route & state & dispatch
export type ProfileOwnPropsType = ProfileStateType & MapDispatchToPropsType //state & dispatch

const mapStateToProps = ({profileReducer}: ReduxStateType): ProfileStateType => {
    return {
        profile: profileReducer.profile,
        posts: profileReducer.posts,
        postInput: profileReducer.postInput
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    addPost,
    postInputHandler,
    addLike,
    setUserProfile
}

const WithUrlDataContainerComponent = withRouter(ProfileClassComponent)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);