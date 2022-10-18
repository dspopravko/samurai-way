import React from 'react';
import {User} from "./User/User";
import s from "./Users.module.css"
import {UserType} from "../../redux/user-reducer";
import {Loader} from "../misc/Loader/Loader";

type UsersComponentPropsType =  {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (page: number) => void
}

export const Users = ({users, unfollow, follow, totalUsersCount, pageSize, currentPage, onPageChanged, isFetching}: UsersComponentPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    if (pagesCount > 20) pagesCount = 20;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersCanvas}>
            <div className={s.usersWrapper}>
                <div>
                    <span>page: </span>
                    {
                        pages.map(p =>
                            <span
                                key={p}
                                className={p === currentPage ? s.activePage : s.page}
                                onClick={() => onPageChanged(p)}
                            >{p}
                                    </span>
                        )
                    }
                    {isFetching && <div className={s.loaderWrapper}><Loader/></div>}
                </div>
                {
                    users.map(u => (
                        <User
                            key={u.id}
                            user={u}
                            follow={follow}
                            unfollow={unfollow}/>
                    ))

                }
            </div>
        </div>
    )

};

