import React from "react";
import s from "./MyProfile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type MyProfilePropsType = {
    store: StoreType
}

export const MyProfile = ({store}: MyProfilePropsType) => {
    const profilePage = store.getState().profileReducer

    return (
        <div className={s.profileWrapper}>
            <ProfileInfo
                pageHeader={profilePage.pageHeader}/>
            <MyPostsContainer/>
        </div>
    )
}