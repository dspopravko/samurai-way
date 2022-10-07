import {UserType} from "../../../redux/user-reducer";
import {Button} from "../../misc/Button/Button";
import s from "./User.module.css"
import React from "react";

type UserPropsType = {
    user: UserType
    followCallback: (userID: number) => void
    unfollowCallback: (userID: number) => void
}
export const User = ({user, followCallback, unfollowCallback}: UserPropsType) => {
    return (
        <div className={s.user}>
            <div className={s.w1}>
                <div className={s.imgWrapper}>
                    <img alt={user.fullName + "-avatar"} src={user.avatar}/>
                </div>
                <div className={s.btnWrapper}>
                    {user.followed ? <Button name={"Unfollow"} onClick={() => {
                            unfollowCallback(user.id)
                        }}></Button>
                        : <Button name={"Follow"} onClick={() => {
                            followCallback(user.id)
                        }}></Button>}
                </div>
            </div>
            <div className={s.w2}>
                <div className={s.w2_1}>
                    <div className={s.fullname}>{user.fullName}</div>
                    <div className={s.status}>Status: {user.status}</div>
                </div>
                <div className={s.w2_2}>
                    Location:
                    <div>{user.location.country}, {user.location.city}</div>
                </div>
            </div>
    </div>
    )
}