import React, {useState} from 'react';
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./PostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    postText: string
}

function Posts(props: MyPostsPropsType) {

    const [errorMsg, setErrorMsg] = useState("")

    const postsList = props.posts.map((post, index) => {
        return <Post key={index}
                     props={post}
                     addLikeHandler={props.addLike}
        />
    })


    const onSubmitPostForm = (form: FormDataType) => {
        if (!form.postText.trim()) setErrorMsg("Your post is empty!")
        else {
            props.addPost(form.postText)
            setErrorMsg("")
        }
    }

    if (props.isFetchingProfile) {
        return (
            <div className={s.myPostsWrapper}>
                <div className={s.post_new}>
                    <div className={s.postNewCanvas}>
                        <SendPostFormRedux
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
                    <SendPostFormRedux
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

const SendPostForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
                    <Field
                        component={"textarea"}
                        name={"postText"}
                        className={s.textarea}>

                    </Field>
            <button>Add Post</button>

        </form>
    )
}

const SendPostFormRedux = reduxForm<FormDataType>({form: 'SendPostForm'})(SendPostForm)