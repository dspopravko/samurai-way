import s from "./Header.module.css"

export default function Header() {
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
        </header>
    )
}