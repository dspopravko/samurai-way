import React from 'react';
import {User} from "./User/User";
import s from "./Users.module.css"
import {Loader} from "../misc/Loader/Loader";
import {UsersPropsType} from "./UsersContainer";

type UsersComponentPropsType = UsersPropsType

export const Users = ({users, getUsers, unfollow, follow, totalUsersCount, pageSize, currentPage, isFetchingUsers, isFetchingFollow }
                          : UsersComponentPropsType) => {

    const onPageChanged = (n: number) => getUsers(n, pageSize)

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    return (
        <div className={s.usersCanvas}>
            <div className={s.usersWrapper}>
                <div>
                    <span>This is {currentPage} page. </span><br/>
                    <span>Select page from 1 to {pagesCount}</span>
                    <input type={'number'}
                           max={pagesCount}
                           min={1} onChange={(e) => onPageChanged(+e.target.value)}
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
                        />
                    ))

                }
            </div>
        </div>
    )

};

