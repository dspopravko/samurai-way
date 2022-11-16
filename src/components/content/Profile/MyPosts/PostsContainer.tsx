import React from "react";
import {ReduxStateType} from "../../../../redux/redux-store";
import {
    addLike,
    addPost,
    PostType,
    ProfileType
} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

type MapStateToPropsType = {
    posts: PostType[]
    profile: ProfileType
    isFetchingProfile: boolean
}
type MapDispatchToPropsType = {
    addLike: (postId: number) => void
    addPost: (post: string) => void
}
export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        posts: state.profileReducer.posts,
        profile: state.profileReducer.profile,
        isFetchingProfile: state.profileReducer.isFetchingProfile
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
        addLike,
        addPost
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)