import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title: string) => void
    title: string

}

export const Input = (props: InputPropsType) => {

    const onChangInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <div>
            <input value={props.title} onChange={onChangInputHandler}/>
        </div>
    );
};
