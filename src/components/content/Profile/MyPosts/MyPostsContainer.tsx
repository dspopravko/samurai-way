import {
    ActionsTypes,
    PageHeaderType,
    PostType
} from "../../../../redux/store.js";
import React from "react";
import {addLikeAC, addPostAC, postInputHandlerAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    pageHeader: PageHeaderType
    posts: PostType[]
    dispatch: (actions: ActionsTypes) => void
}

export default function MyPostsContainer({
                                    posts,
                                    pageHeader,
                                    dispatch
                                }: MyPostsPropsType) {
    const likeClickHandler = (postId: number) => dispatch(addLikeAC(postId))
    const addPostHandler = () => dispatch(addPostAC())
    const inputHandler = (input: string) => dispatch(postInputHandlerAC(input))

    return (
        <MyPosts
            posts={posts}
            addLikeHandler={likeClickHandler}
            addPostHandler={addPostHandler}
            pageHeader={pageHeader}
            inputHandler={inputHandler}
        />
    )
}