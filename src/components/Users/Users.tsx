import React, {useEffect} from 'react';
import {UsersPropsType} from "./Users.container";
import {User} from "./User/User";

export const Users = ({users, setUsers, unfollowCallback, followCallback}: UsersPropsType) => {

    useEffect(() => {
    if (users.length === 0) {
        setUsers([
            {id: 1, followed: true, avatar: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", fullName: "Firat Arellano", status: 'Chilling', location: {city: "Minsk", country: "Belarus"}},
            {id: 2, followed: false, avatar: "https://images.pexels.com/photos/2531551/pexels-photo-2531551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", fullName: "Lance Munro", status: 'Chilling', location: {city: "Minsk", country: "Belarus"}},
        ])

    }
    }, [])

    return <div>
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

};

