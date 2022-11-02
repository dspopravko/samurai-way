import React, {ChangeEvent, useState} from 'react';
import s from "./Posts.module.css";
import {Button} from "../../../misc/Button/Button";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./PostsContainer";

function Posts(props: MyPostsPropsType) {

    const [errorMsg, setErrorMsg] = useState("")

    const onClickAddPostHandler = () => {
        if (!props.postInput.trim()) setErrorMsg("Your post is empty!")
        else {
            props.addPost()
            setErrorMsg("")
        }
    }

    const postsList = props.posts.map((post, index) => {
        return <Post key={index}
                     props={post}
                     addLikeHandler={props.addLike}
        />
    })

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.postInputHandler(e.currentTarget.value)

    if (props.isFetchingProfile) {
        return (
            <div className={s.myPostsWrapper}>
                <div className={s.post_new}>
                    <div className={s.postNewCanvas}>
                    <textarea
                        onChange={()=>{}}
                        value={""}
                        className={s.textarea}>
                    </textarea>
                        <Button name={"Add Post"} onClick={onClickAddPostHandler}></Button>
                    </div>
                    <div>{errorMsg}</div>
                </div>
            </div>
        )
    }

    return (
        <div className={s.myPostsWrapper}>
            <div className={s.post_new}>
                <div className={s.postNewCanvas}>
                    <textarea
                        onChange={onChangeInputHandler}
                        value={props.postInput}
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

export default Posts;