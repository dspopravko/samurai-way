import React from "react";
import s from "./MyProfile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../../redux/state.js";


type MyProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export const MyProfile = ({profilePage, dispatch}: MyProfilePropsType) => {

    return <div className={s.profileWrapper}>
        <ProfileInfo
            pageHeader={profilePage.pageHeader}/>
        <MyPosts
            dispatch={dispatch}
            posts={profilePage.posts}
            pageHeader={profilePage.pageHeader}
            />
    </div>
}