import React from "react";
import s from "./Post.module.css";
import {PostType} from "../../../../../redux/profile-reducer";

type PostPropsType = {
    props: PostType
    addLikeHandler: (postId: number) => void
}

export const Post = ({props, addLikeHandler}: PostPropsType ) => {
    const likeClickHandler = () => addLikeHandler(props.id)

    const likeClass = props.myLike ? `${s.likes} ${s.active}` : s.likes
    const likeCount = props.myLike ? props.likes + 1 : props.likes
    return (
        <div className={s.post}>
            <div className={s.authorWrapper}>
                <div className={s.avatarWrapper}>
                    <img alt={"avatar"} src={props.avatar}/>
                </div>
                <div className={s.name}>{props.name}</div>
                <div className={s.date}>{props.date}</div>
            </div>
            <div className={s.bodyWrapper}>
                {props.message}
            </div>
            <div className={s.postInteractions}>
                <div onClick={likeClickHandler} className={likeClass}>
                    <div className={s.likeSvgContainer}>
                        <svg viewBox="0 0 52 48.35">
                            <path
                                d="M51.91,16.24C51.15,7.89,45.24,1.83,37.84,1.83a14,14,0,0,0-12,6.9,13.47,13.47,0,0,0-11.69-6.9C6.76,1.83.85,7.89.09,16.24a14.8,14.8,0,0,0,.44,5.48,23.5,23.5,0,0,0,7.2,12L25.84,50.17,44.27,33.73a23.5,23.5,0,0,0,7.2-12A14.8,14.8,0,0,0,51.91,16.24Z"
                                transform="translate(0 -1.83)"/>
                        </svg>
                    </div>
                    <div className={s.likes}>{likeCount}</div>
                </div>
            </div>
        </div>
    )
}