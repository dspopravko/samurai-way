import React, {useEffect} from 'react';
import {UsersPropsType} from "./Users.container";
import {User} from "./User/User";
import s from "./Users.module.css"
import * as axios from "axios";

export const Users = ({users, setUsers, unfollowCallback, followCallback}: UsersPropsType) => {
    
    useEffect(() => {
        if (users.length === 0) {
            axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                setUsers(response.data.items)
                console.log(response.data.items)
            })
        }
    }, [])

    return (
        <div className={s.usersCanvas}>
            <div className={s.usersWrapper}>
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

