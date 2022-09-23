import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Button, buttonPropsType} from './Button';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Mics/Button',
    component: Button,
    argTypes: {
        primary: {
          type: 'boolean',
          description: 'Основная кнопка',
            defaultValue: false,
            options: [true, false],
            control: {type: 'radio'}
        },
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args: buttonPropsType) => <Button {...args} />;

export const defaultBtn = Template.bind({});
defaultBtn.args = {
onClick: action('clicked!'),
name: "I'm button!"
};



