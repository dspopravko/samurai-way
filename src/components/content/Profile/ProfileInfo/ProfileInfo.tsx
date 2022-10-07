import React from "react";
import s from "./ProfileInfo.module.css"
import {PageHeaderType} from "../../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    pageHeader: PageHeaderType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const a = props.pageHeader.dateOfBirth.split("")
    const date = `${a[0]+a[1]}.${a[2]+a[3]}.${a[4]+a[5]+a[6]+a[7]}`
    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.contentImgWrapper}>
                <img
                    alt={"profile-wallpaper"}
                    src={'https://asset.berita24.id/wallpaper/20220115/3200x1080-macos-extended-wallpaper-for-ultrawide-monitors-thumb.jpg'}/>
            </div>
            <div className={s.description}>
                <div className={s.avatarBlock}>
                    <div className={s.avatarWrapper}>
                        <img alt={"avatar"}
                             src={props.pageHeader.avatar}>
                        </img>
                    </div>
                    <div className={s.nameWrapper}>
                        {props.pageHeader.name}
                    </div>
                </div>
                <div className={s.description_2}> Date of birth: {date}</div>
            </div>
        </div>
    )
}