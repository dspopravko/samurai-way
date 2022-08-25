import React from "react";

type buttonPropsType = {
    name: string
    callback: () => void
}

export const Button = (props: buttonPropsType) => {
    const onClickButtonHandler = () => {
        props.callback()
    }
    return <button onClick={onClickButtonHandler}>{props.name}</button>
}