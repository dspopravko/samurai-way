import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Input, InputPropsType} from './Input';
import {action} from "@storybook/addon-actions";
import {string} from "prop-types";
import {Button, buttonPropsType} from "../Button/Button";

export default {
    title: 'Mics/Input',
    component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputPropsType) => {
    const [title, setTitle] = useState(args.title)
    return <Input {...args} title={title} onChangeText={setTitle} />
};

export const controlledInput = Template.bind({});
controlledInput.args = {
    // onChangeText: onChangeCallback(value),
    //     onEnter: () => void
    // error: string
    // spanClassName: string
    // placeholder: string
};




