import React from 'react';
import {UsersPropsType} from "./Users.container";
import {User} from "./User/User";
import s from "./Users.module.css"
type UsersComponentPropsType = UsersPropsType & {onPageChanged: (page: number) => void}


export const Users = ({users, unfollowCallback, followCallback, totalUsersCount, pageSize, currentPage, onPageChanged}: UsersComponentPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)

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

                </div>
                {
                    users.map(u => (
                        <User
                            key={u.id}
                            user={u}
                            followCallback={followCallback}
                            unfollowCallback={unfollowCallback}/>
                    ))

                }
            </div>
        </div>
    )

};

