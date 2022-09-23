import React from "react";
import s from "./Button.module.css"

export type buttonPropsType = {
    name: string
    onClick?: () => void
    primary?: boolean
}

export const Button = ({
                           name,
                           primary = false,
                           ...props
                       }: buttonPropsType) => {

    const finalClassName = `${s.btn}
    ${primary? s.primary : ''}`
    return <button className={finalClassName}
                   type="button"
                   {...props}>{name}
    </button>
}