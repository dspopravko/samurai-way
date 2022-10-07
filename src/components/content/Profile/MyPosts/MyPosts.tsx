import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css";
import {Button} from "../../../misc/Button/Button";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

function MyPosts({
                     pageHeader,
                     posts,
                     inputHandler,
                     addPostHandler,
                     addLikeHandler
                 }: MyPostsPropsType) {

    const [errorMsg, setErrorMsg] = useState("")

    const onClickAddPostHandler = () => {
        if (!pageHeader.postInput.trim()) setErrorMsg("Your post is empty!")
        else {
            addPostHandler()
            setErrorMsg("")
        }
    }

    const postsList = posts.map((post, index) => {
        return <Post key={index}
                     props={post}
                     addLikeHandler={addLikeHandler}
        />
    })

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => inputHandler(e.currentTarget.value)

    return (
        <div className={s.myPostsWrapper}>
            <div className={s.post_new}>
                <div className={s.postNewCanvas}>
                    <textarea
                        onChange={onChangeInputHandler}
                        value={pageHeader.postInput}
                        // ref={newPostElement}
                        className={s.textarea}>

                    </textarea>
                    <Button name={"Add Post"} onClick={onClickAddPostHandler}></Button>
                </div>
                <div>{errorMsg}</div>
            </div>
            {postsList}
        </div>
    );
}

export default MyPosts;