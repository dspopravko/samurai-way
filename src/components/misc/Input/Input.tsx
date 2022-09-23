import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useEffect, useState} from 'react';
import s from "./Input.module.css"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    placeholder?: string
}

export const Input = ({
                          type,
                          onChangeText,
                          onChange,
                          onKeyPress,
                          onEnter,
                          error,
                          placeholder,
                          className,
                          spanClassName,
                          ...restProps
                      }: InputPropsType) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? s.errorInput : s.superInput} ${className}`
    return (
        <div>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps}
            />
            <span className={finalInputClassName}>{error}</span>
        </div>
    );
};
