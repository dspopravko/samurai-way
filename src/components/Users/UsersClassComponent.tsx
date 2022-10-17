import React from 'react';
import {UsersPropsType} from "./Users.container";
import {User} from "./User/User";
import s from "./Users.module.css"
import * as axios from "axios";

class UsersClassComponent extends React.Component<UsersPropsType> {

    componentDidMount () {
            axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data.items)
            })
    }

    render() {
        return (
            <div className={s.usersCanvas}>
                <div className={s.usersWrapper}>
                    {
                        this.props.users.map(u => (
                            <User
                                key={u.id}
                                user={u}
                                followCallback={this.props.followCallback}
                                unfollowCallback={this.props.unfollowCallback}/>
                        ))

                    }
                </div>
            </div>
        )
    }
}

export default UsersClassComponent