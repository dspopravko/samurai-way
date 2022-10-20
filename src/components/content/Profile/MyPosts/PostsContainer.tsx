import React from "react";
import {ReduxStateType} from "../../../../redux/redux-store";
import {
    addLike,
    addPost,
    postInputHandler,
    PostType,
    ProfileType
} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

type MapStateToPropsType = {
    posts: PostType[]
    profile: ProfileType
    postInput: string
}
type MapDispatchToPropsType = {
    addLike: (postId: number) => void
    addPost: () => void
    postInputHandler: (input: string) => void
}
export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        posts: state.profileReducer.posts,
        profile: state.profileReducer.profile,
        postInput: state.profileReducer.postInput
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
        addLike,
        addPost,
    postInputHandler
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)