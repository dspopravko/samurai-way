import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

export default function Header({isAuth, login}: {isAuth: boolean, login: string}) {
    return (
        <header className={s.header}>
            <div className={s.imgWrapper}>
                <img
                    alt={"logo"}
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Orkut_Logo_2.png/800px-Orkut_Logo_2.png'}>

                </img>
            </div>
            <div className={s.titleWrapper}>
                <p>Project Media</p>
            </div>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>{isAuth ? login : "Login in"}</NavLink>
            </div>
        </header>
    )
}