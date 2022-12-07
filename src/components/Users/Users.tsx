import React from 'react';
import {User} from "./User/User";
import s from "./Users.module.css"
import {Loader} from "../misc/Loader/Loader";
import {UsersPropsType} from "./UsersContainer";
import {Paginator} from "./Paginator";

type UsersComponentPropsType = UsersPropsType

export const Users = ({users, getUsers, unfollow, follow, totalUsersCount, pageSize, currentPage, isFetchingUsers, isFetchingFollow }
                          : UsersComponentPropsType) => {

    return (
        <div className={s.usersCanvas}>
            <div className={s.usersWrapper}>
                <div>
                    <Paginator
                        getUsers={getUsers}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        totalUsersCount={totalUsersCount}
                    />
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

