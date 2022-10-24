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
    isFetchingUsers: boolean
    isFetchingFollow: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (page: number) => void
    setFetchingFollow: (setType: 'post' | 'delete', userId: number) => void
}

export const Users = ({users, unfollow, follow, totalUsersCount, pageSize, currentPage, onPageChanged, isFetchingUsers, isFetchingFollow, setFetchingFollow}: UsersComponentPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    // if (pagesCount > 20) pagesCount = 20;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersCanvas}>
            <div className={s.usersWrapper}>
                <div>
                    <span>This is {currentPage} page. </span><br/>
                    <span>Select page from 1 to {pagesCount}</span>
                    <input max={pagesCount} min={1} onBlur={(e) => onPageChanged(+e.target.value)}
                    /> max = {pagesCount}
                    {isFetchingUsers && <div className={s.loaderWrapper}><Loader/></div>}
                </div>
                {
                    users.map(u => (
                        <User
                            key={u.id}
                            user={u}
                            follow={follow}
                            unfollow={unfollow}
                            isFetchingFollow={isFetchingFollow}
                            setFetchingFollow={setFetchingFollow}
                        />
                    ))

                }
            </div>
        </div>
    )

};

