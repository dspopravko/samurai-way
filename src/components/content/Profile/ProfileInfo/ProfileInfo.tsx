import React from "react";
import s from "./ProfileInfo.module.css"
import {PageHeaderType} from "../../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    pageHeader: PageHeaderType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.contentImgWrapper}>
                <img
                    alt={"profile-wallpaper"}
                    src={'https://asset.berita24.id/wallpaper/20220115/3200x1080-macos-extended-wallpaper-for-ultrawide-monitors-thumb.jpg'}/>
            </div>
            <div className={s.description}>
                <div className={s.avatarWrapper}>
                    <img alt={"avatar"}
                         src={props.pageHeader.avatar}>
                    </img>
                    {props.pageHeader.name}
                </div>
                <div> Date of birth: {props.pageHeader.dateOfBirth}</div>
            </div>
        </div>
    )
}