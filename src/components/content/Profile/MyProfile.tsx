import React from "react";
import s from "./MyProfile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const MyProfile = () => {
    return <div className={s.profileWrapper}>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}