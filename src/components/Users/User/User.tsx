import {UserType} from "../../../redux/user-reducer";
import {Button} from "../../misc/Button/Button";
import s from "./User.module.css"
import React from "react";
import logo from "../../../assets/img/defaultUser.png"
import {NavLink} from "react-router-dom";

type UserPropsType = {
    isFetchingFollow: Array<number>
    user: UserType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}
export const User = ({user, follow, unfollow, isFetchingFollow}: UserPropsType) => {
    const {id, name, status, photos, followed} = {...user}
    return (
        <div className={s.user}>
            <div className={s.w1}>
                <div className={s.imgWrapper}>
                    <NavLink to={'/profile/' + id}>
                        <img alt={name + "-avatar"} src={photos.small ? photos.small : logo}/>
                    </NavLink>
                </div>
                <div className={s.btnWrapper}>
                    {followed ?
                        <Button disabled={isFetchingFollow.some(i=>i === id)}
                                name={'Unfollow'}
                                onClick={()=>unfollow(id)}
                        />
                        : <Button disabled={isFetchingFollow.some(i=>i === id)}
                                  name={'Follow'}
                                  onClick={() => {follow(id)}}
                        />}
                </div>
            </div>
            <div className={s.w2}>
                <div className={s.w2_1}>
                    <div className={s.fullname}>{name}</div>
                    <div className={s.status}>Status: {status ? status : "..."}</div>
                </div>
                <div className={s.w2_2}>
                    Location:
                    <div>user.location.country, user.location.city</div>
                </div>
            </div>
        </div>
    )
}