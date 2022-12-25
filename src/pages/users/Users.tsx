import React from 'react';
import {UserItem} from "../../components/UserItem/UserItem";
import s from "./Users.module.css"
import {Loader} from "../../components/Loader/Loader";
import {UsersPropsType} from "./UsersContainer";
import {Pagination} from "../../components/Paginator/Paginator";

type UsersComponentPropsType = UsersPropsType

export const Users = ({users, getUsers, unfollow, follow, totalUsersCount, pageSize, currentPage, isFetchingUsers, isFetchingFollow }
                          : UsersComponentPropsType) => {

    return (
        <div className={s.usersCanvas}>
            <div className={s.usersWrapper}>
                <div>
                    <Pagination
                      pageCount={totalUsersCount}
                      onPageChange={(selectedItem)=>getUsers(selectedItem.selected + 1, pageSize)}
                      currentPage={currentPage}
                      pageSize={pageSize}
                    />
                    {isFetchingUsers && <div className={s.loaderWrapper}><Loader/></div>}
                </div>
                {
                    users.map(u => (
                        <UserItem
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

