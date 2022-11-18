import React, {useState} from 'react';
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./PostsContainer";
import {FormDataType, SendMessageForm} from "../../../misc/MessageForm/MessageForm";

function Posts(props: MyPostsPropsType) {

    const [errorMsg, setErrorMsg] = useState("")

    const postsList = props.posts.map((post, index) => {
        return <Post key={index}
                     props={post}
                     addLikeHandler={props.addLike}
        />
    })

    const onSubmitPostForm = (form: FormDataType) => {
        if (!form.messageText.trim()) setErrorMsg("Your post is empty!")
        else {
            props.addPost(form.messageText)
            setErrorMsg("")
        }
    }

    if (props.isFetchingProfile) {
        return (
            <div className={s.myPostsWrapper}>
                <div className={s.post_new}>
                    <div className={s.postNewCanvas}>
                        <SendMessageForm
                            onSubmit={onSubmitPostForm}
                        />
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
                    <SendMessageForm
                        placeholder={'Write a post...'}
                        onSubmit={onSubmitPostForm}
                    />
                </div>
                <div>{errorMsg}</div>
            </div>
            {postsList}
        </div>
    );
}

export default Posts;