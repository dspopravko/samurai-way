import React from "react";
import s from "./MyProfile.module.css"
import MyPosts from "./MyPosts/MyPosts";

export const MyProfile = () => {
    return <div className={s.content}>
        <div className={s.contentImgWrapper}>
            <img
                alt={"profile-wallpaper"}
                src={'https://asset.berita24.id/wallpaper/20220115/3200x1080-macos-extended-wallpaper-for-ultrawide-monitors-thumb.jpg'}/>
        </div>
        <div>
            avatar+description
        </div>
        my posts
        <MyPosts/>
        </div>
}