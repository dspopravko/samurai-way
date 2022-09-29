import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {
    ActionsTypes,
    PageHeaderType,
    PostType
} from "../../../../redux/state.js";
import React, {ChangeEvent, useState} from "react";
import {Button} from "../../../misc/Button/Button";
import {addPostAC, postInputHandlerAC} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
    pageHeader: PageHeaderType
    posts: PostType[]
    dispatch: (actions: ActionsTypes) => void
}

export default function MyPosts({
                                    posts,
                                    pageHeader,
                                    dispatch
                                }: MyPostsPropsType) {

    // const newPostElement = React.createRef<HTMLTextAreaElement>();
    const [errorMsg, setErrorMsg] = useState("")

    const postsList = posts.map((post, index) => {
        return <Post key={index}
                     props={post}
                     dispatch={dispatch}
        />
    })

    const addPostHandler = () => {
        if (!pageHeader.postInput.trim()) setErrorMsg("Your post is empty!")
        else {
            dispatch(addPostAC())
            setErrorMsg("")
        }
    }

    const inputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(postInputHandlerAC(e.currentTarget.value))
    }

    return (
        <div className={s.myPostsWrapper}>
            <div className={s.post_new}>
                <textarea
                    onChange={inputHandler}
                    value={pageHeader.postInput}
                    // ref={newPostElement}
                    className={s.input}></textarea>
                <Button name={"Add Post"} onClick={addPostHandler}></Button>
            </div>
            <div>{errorMsg}</div>
            {postsList}
        </div>
    )
}