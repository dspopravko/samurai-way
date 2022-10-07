import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={s.navbar}>
            <NavLink to={"/profile"} activeClassName={s.active}>
                <div className={s.item}>Profile</div>
            </NavLink>

            <NavLink to={"/users"} activeClassName={s.active}>
                <div className={s.item}>Users</div>
            </NavLink>

            <NavLink to={"/messages"} activeClassName={s.active}>
                <div className={s.item}>Messages</div>
            </NavLink>
            <NavLink to={"/news"} activeClassName={s.active}>
                <div className={s.item}>News</div>
            </NavLink>
            <NavLink to={"/music"} activeClassName={s.active}>
                <div className={s.item}>Music</div>
            </NavLink>

            <NavLink to={"/notes"} activeClassName={s.active}>
                <div className={s.item}>Notes</div>
            </NavLink>

            <NavLink to={"/settings"} activeClassName={s.active}>
                <div className={s.item}>Settings</div>
            </NavLink>


        </nav>
    )
}