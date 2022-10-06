import React from "react";
import {ReduxStateType} from "../../../../redux/redux-store";
import {addLikeAC, addPostAC, PageHeaderType, postInputHandlerAC, PostType} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: PostType[]
    pageHeader: PageHeaderType
}
type MapDispatchToPropsType = {
    addLikeHandler: (postId: number) => void
    addPostHandler: () => void
    inputHandler: (input: string) => void
}
export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        posts: state.profileReducer.posts,
        pageHeader: state.profileReducer.pageHeader
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addLikeHandler: (postId: number) => dispatch(addLikeAC(postId)),
        addPostHandler: () => dispatch(addPostAC()),
        inputHandler: (input: string) => dispatch(postInputHandlerAC(input))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)