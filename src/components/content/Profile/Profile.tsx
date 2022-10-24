import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./MyPosts/PostsContainer";
import s from "./Profile.module.css"
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileComponentPropsType =  {
    isFollowed: boolean
    isMyProfile: boolean
    profile: ProfileType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export const Profile = ({profile, isMyProfile, follow, unfollow, isFollowed}: ProfileComponentPropsType) => {

    return (
        <div className={s.profileWrapper}>
            <ProfileInfo
                isFollowed={isFollowed}
                isMyProfile={isMyProfile}
                profile={profile}
                follow={follow}
                unfollow={unfollow}
            />
            <PostsContainer/>
        </div>
    )
}