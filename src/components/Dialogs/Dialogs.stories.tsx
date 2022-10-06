import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Dialogs} from './Dialogs';
import {BrowserRouter} from "react-router-dom";
import {DialogsPropsType} from "./DialogsContainer";

export default {
    title: 'Dialogs',
    component: Dialogs,
} as ComponentMeta<typeof Dialogs>;


const Template: ComponentStory<typeof Dialogs> = (args: DialogsPropsType) =><BrowserRouter> <Dialogs {...args} /></BrowserRouter>;

export const DialogsExample = Template.bind({});
DialogsExample.args = {
    chats: [
        {
            chatHeader: {
                id: 1,
                author: "Maisy Gibson",
                date: "12:46",
                chatLogo: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            chatMessages: [{
                id: 1,
                authorId: 2645,
                name: "Maisy",
                message: "How are you?",
                date: "12:45",
                avatar: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }, {
                id: 2,
                authorId: 2645,
                name: "Maisy",
                message: "I miss you",
                date: "12:46",
                avatar: "https://images.pexels.com/photos/7860704/pexels-photo-7860704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }],
            chatNewMessage: {
                message: "State controlled input"
            }
        },
        {
            chatHeader: {
                id: 2,
                author: "Reo Charles",
                date: "09:14",
                chatLogo: "https://images.pexels.com/photos/7646458/pexels-photo-7646458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            chatMessages: [{
                id: 1,
                authorId: 2645,
                name: "Reo",
                message: "Let's go out tomorrow!",
                date: "09:14",
                avatar: "https://images.pexels.com/photos/7646458/pexels-photo-7646458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }, {
                id: 2,
                authorId: 2645,
                name: "Reo",
                message: "7pm is ok?",
                date: "09:14",
                avatar: "https://images.pexels.com/photos/7646458/pexels-photo-7646458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }],
            chatNewMessage: {
                message: "State controlled input"
            }
        }, {
            chatHeader: {
                id: 3,
                author: "Loui Kay",
                date: "13:10",
                chatLogo: "https://images.pexels.com/photos/3209639/pexels-photo-3209639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            chatMessages: [{
                id: 1,
                authorId: 2645,
                name: "Loui",
                message: "Here some picks from past weekends /someurl/",
                date: "13:08",
                avatar: "https://images.pexels.com/photos/3209639/pexels-photo-3209639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }, {
                id: 2,
                authorId: 2645,
                name: "Loui",
                message: "Choose that's best and chat me",
                date: "13:10",
                avatar: "https://images.pexels.com/photos/3209639/pexels-photo-3209639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }],
            chatNewMessage: {
                message: "State controlled input"
            }
        },
    ]
};



