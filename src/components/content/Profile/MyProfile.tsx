import React from "react";
import s from "./MyProfile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state.js";

type MyProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    addLike: (postID: number) => void
    postInputHandler: (postMessage: string) => void
}


export const MyProfile = ({addLike, addPost, profilePage, postInputHandler}: MyProfilePropsType) => {

    return <div className={s.profileWrapper}>
        <ProfileInfo
            pageHeader={profilePage.pageHeader}/>
        <MyPosts
            postInputHandler={postInputHandler}
            addLikeCallback={addLike}
            addPostCallback={addPost}
            posts={profilePage.posts}
            pageHeader={profilePage.pageHeader}
            />
    </div>
}