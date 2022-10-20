import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Messages from './Messages';

export default {
    title: 'Dialogs/Messages',
    component: Messages,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Messages>;


const Template: ComponentStory<typeof Messages> = (args) => <Messages {...args} />;

export const multipleMessages = Template.bind({});
multipleMessages.args = {
    chatMessages: [{
        id: 3,
        message: "Hello!",
        name: "Mosh Hamedani",
        date: "23:12",
        avatar: "https://img-c.udemycdn.com/user/200_H/712832_5e8d_3.jpg",
        authorId: 32
    }, {
        id: 3,
        message: "Hi!",
        name: "My Name",
        date: "23:13",
        avatar: "https://img-c.udemycdn.com/user/200_H/712832_5e8d_3.jpg",
        authorId: 0
    }, {
        id: 3,
        message: "How are you?",
        name: "Mosh Hamedani",
        date: "23:13",
        avatar: "https://img-c.udemycdn.com/user/200_H/712832_5e8d_3.jpg",
        authorId: 32
    },],
    chatHeader: {
        id: 5,
        author: "author",
        date: "21:34",
        chatLogo: ""
    }
};


