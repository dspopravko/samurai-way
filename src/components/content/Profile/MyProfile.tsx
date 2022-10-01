import React from "react";
import s from "./MyProfile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../../redux/store.js";


type MyProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export const MyProfile = ({profilePage, dispatch}: MyProfilePropsType) => {

    return <div className={s.profileWrapper}>
        <ProfileInfo
            pageHeader={profilePage.pageHeader}/>
        <MyPostsContainer
            dispatch={dispatch}
            posts={profilePage.posts}
            pageHeader={profilePage.pageHeader}
            />
    </div>
}