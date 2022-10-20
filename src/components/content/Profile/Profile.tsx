import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./MyPosts/PostsContainer";
import s from "./Profile.module.css"
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileComponentPropsType =  {
    profile: ProfileType
    addPost: () => void
    postInputHandler: (postInput: string) => void
    addLike: (postID: number) => void
}

export const Profile = ({profile}: ProfileComponentPropsType) => {

    return (
        <div className={s.profileWrapper}>
            <ProfileInfo
                profile={profile}/>
            <PostsContainer/>
        </div>
    )
}