import {UserType} from "../../../redux/user-reducer";
import {Button} from "../../misc/Button/Button";
import s from "./User.module.css"
import React from "react";
import logo from "../../../assets/img/defaultUser.png"
import {NavLink} from "react-router-dom";
import {UsersAPI} from "../../../API/API";

type UserPropsType = {
    isFetchingFollow: Array<number>
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setFetchingFollow: (setType: 'post' | 'delete', userId: number) => void
}
export const User = ({user, follow, unfollow, isFetchingFollow, setFetchingFollow}: UserPropsType) => {
    return (
        <div className={s.user}>
            <div className={s.w1}>
                <div className={s.imgWrapper}>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt={user.name + "-avatar"} src={user.photos.small ? user.photos.small : logo}/>
                    </NavLink>
                </div>
                <div className={s.btnWrapper}>
                    {user.followed ?
                        <Button disabled={isFetchingFollow.some(id=>id ===user.id)} name={'Unfollow'} onClick={async() => {
                            setFetchingFollow('post', user.id)
                            await UsersAPI.unfollowUser(user.id) && unfollow(user.id)
                            setFetchingFollow('delete', user.id)
                        }}></Button>
                        : <Button disabled={isFetchingFollow.some(id=>id ===user.id)} name={'Follow'} onClick={async () => {
                            setFetchingFollow('post', user.id)
                            await UsersAPI.followUser(user.id) && follow(user.id)
                            setFetchingFollow('delete', user.id)
                        }}></Button>}
                </div>
            </div>
            <div className={s.w2}>
                <div className={s.w2_1}>
                    <div className={s.fullname}>{user.name}</div>
                    <div className={s.status}>Status: {user.status ? user.status : "..."}</div>
                </div>
                <div className={s.w2_2}>
                    Location:
                    <div>user.location.country, user.location.city</div>
                </div>
            </div>
        </div>
    )
}