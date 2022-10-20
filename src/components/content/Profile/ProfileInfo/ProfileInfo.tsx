import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../../redux/profile-reducer";
import logo from "../../../../assets/img/defaultUser.png"
import {Loader} from "../../../misc/Loader/Loader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (props.profile.userId === 0) return <div style={{height: "326px", display: "flex", justifyContent: "center", alignItems: "center"}}><Loader></Loader></div>

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
                             src={props.profile.photos.large || logo}>
                        </img>
                    </div>
                    <div className={s.nameWrapper}>
                        {props.profile.fullName}
                    </div>
                </div>
                <div className={s.description_2}> Date of birth: null</div>
            </div>
        </div>
    )
}