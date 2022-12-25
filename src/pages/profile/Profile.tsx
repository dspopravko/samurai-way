import {ProfileInfo} from "../../features/Profile/ProfileInfo/ProfileInfo";
import {PostsContainer} from "../../features/Profile/MyPosts/PostsContainer";
import s from "./Profile.module.css"
import {ProfileType} from "../../redux/profile-reducer";
import React from "react";

type ProfileComponentPropsType = {
	isFollowed: boolean
	isMyProfile: boolean
	profile: ProfileType
	follow: (userID: number) => void
	unfollow: (userID: number) => void
	isFetchingProfile: boolean
	updateStatus: (status: string) => void
	updatePhoto: (photoFile: File) => void
}

export const Profile = (props: ProfileComponentPropsType) => {
	return (
		<div className={s.profileWrapper}>
			<ProfileInfo
				{...props}
			/>
			<PostsContainer/>
		</div>
	)
}