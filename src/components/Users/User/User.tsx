import {UserType} from "../../../redux/user-reducer";
import {Button} from "../../misc/Button/Button";
import s from "./User.module.css"
import React from "react";
import logo from "../../../assets/img/defaultUser.png"
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}
export const User = ({user, follow, unfollow}: UserPropsType) => {
    return (
        <div className={s.user}>
            <div className={s.w1}>
                <div className={s.imgWrapper}>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt={user.name + "-avatar"} src={user.photos.small ? user.photos.small : logo}/>
                    </NavLink>
                </div>
                <div className={s.btnWrapper}>
                    {user.followed ? <Button name={"Unfollow"} onClick={() => {
                            unfollow(user.id)
                        }}></Button>
                        : <Button name={"Follow"} onClick={() => {
                            follow(user.id)
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