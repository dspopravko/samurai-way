import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../../redux/profile-reducer";
import logo from "../../../../assets/img/defaultUser.png"
import {Loader} from "../../../misc/Loader/Loader";
import {Button} from "../../../misc/Button/Button";
import {UsersAPI} from "../../../../API/API";

type ProfileInfoPropsType = {
    isFollowed: boolean
    isMyProfile: boolean
    profile: ProfileType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (props.profile.userId === 0) return <div style={{height: "326px", display: "flex", justifyContent: "center", alignItems: "center"}}><Loader></Loader></div>
    console.log('is followed? ' + props.isFollowed)
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
                <div className={s.description_2}>
                    {props.isMyProfile? 'true':'false'}
                    aboutMe: {props.profile.aboutMe} <br/>
                    lookingForAJob: {props.profile.lookingForAJob}<br/>
                    lookingForAJobDescription: {props.profile.lookingForAJobDescription}
                </div>
                <div className={s.description_3}>


                    {props.isMyProfile? 'Current user account':''}
                    {props.isMyProfile? ''
                        :<div className={s.btnWrapper}>
                            {props.isFollowed ?
                                <Button name={"Unfollow"} onClick={async() => {
                                    await UsersAPI.unfollowUser(props.profile.userId) && props.unfollow(props.profile.userId)
                                }}></Button>
                                : <Button name={"Follow"} onClick={async () => {
                                    await UsersAPI.followUser(props.profile.userId) && props.follow(props.profile.userId)
                                }}></Button>}
                        </div>
                    }



                </div>
            </div>
        </div>
    )
}