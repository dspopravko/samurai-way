import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Message } from './Message';

export default {
    title: 'Dialogs/Message',
    component: Message,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Message>;


const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const receivedMessage = Template.bind({});
receivedMessage.args = {
    id: 3,
    message: "Hello!",
    name: "Mosh Hamedani",
    date: "23:12",
    avatar: "https://img-c.udemycdn.com/user/200_H/712832_5e8d_3.jpg",
    authorId: 32
};

export const sentMessage = Template.bind({});
sentMessage.args = {
    id: 3,
    message: "Hello to you!",
    name: "My Name",
    date: "23:14",
    authorId: 0
};

