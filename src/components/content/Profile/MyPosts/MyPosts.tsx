import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PageHeaderType, PostType} from "../../../../redux/state.js";
import React, {ChangeEvent, useState} from "react";

type MyPostsPropsType = {
    pageHeader: PageHeaderType
    posts: PostType[]
    addPostCallback: () => void
    addLikeCallback: (postID: number) => void
    postInputHandler: (postMessage: string) => void
}

export default function MyPosts({
                                    posts,
                                    addPostCallback,
                                    addLikeCallback,
                                    pageHeader,
                                    postInputHandler
                                }: MyPostsPropsType) {

    // const newPostElement = React.createRef<HTMLTextAreaElement>();
    const [errorMsg, setErrorMsg] = useState("")

    const postsList = posts.map((post, index) => {
        return <Post key={index}
                     props={post}
                     likesCallback={addLikeCallback}
        />
    })

    const addPostHandler = () => {
        if (!pageHeader.postInput.trim()) setErrorMsg("Your post is empty!")
        else {
            addPostCallback()
            setErrorMsg("")
        }
    }

    const inputHander = (e: ChangeEvent<HTMLTextAreaElement>) => {
        postInputHandler(e.target.value)
    }

    return (
        <div className={s.myPostsWrapper}>
            <div className={s.post_new}>
                <textarea
                    onChange={inputHander}
                    value={pageHeader.postInput}
                    // ref={newPostElement}
                    className={s.input}></textarea>
                <button onClick={addPostHandler} className={s.btn}>Add post</button>
            </div>
            <div>{errorMsg}</div>
            {postsList}
        </div>
    )
}