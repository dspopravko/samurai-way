import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./MyPosts/PostsContainer";
import s from "./Profile.module.css"
import {ProfileType} from "../../../redux/profile-reducer";
import React from "react";

type ProfileComponentPropsType = {
    isFollowed: boolean
    isMyProfile: boolean
    profile: ProfileType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    isFetchingProfile: boolean
    updateStatus: (status: string) => void
}

export const Profile = ({
                            profile,
                            follow,
                            unfollow,
                            isMyProfile,
                            isFollowed,
                            isFetchingProfile,
                            updateStatus
                        }: ProfileComponentPropsType) => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo
                isFollowed={isFollowed}
                isMyProfile={isMyProfile}
                profile={profile}
                follow={follow}
                unfollow={unfollow}
                isFetchingProfile={isFetchingProfile}
                updateStatus={updateStatus}
            />
            <PostsContainer/>
        </div>
    )
}