import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {action} from "@storybook/addon-actions";
import {BrowserRouter} from "react-router-dom";
import Chats, {ChatsPropsType} from "./Chats";

export default {
    title: 'Chats',
    component: Chats,
} as ComponentMeta<typeof Chats>;


const Template: ComponentStory<typeof Chats> = (args: ChatsPropsType) =><BrowserRouter> <Chats {...args} /></BrowserRouter>;

export const ChatsExample = Template.bind({});
ChatsExample.args = {
    chatHeader: {
        id: 1,
        author: "Maisy Gibson",
        date: "12:46",
        chatLogo: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
};



