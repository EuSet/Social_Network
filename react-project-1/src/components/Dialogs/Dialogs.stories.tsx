import React, {ChangeEvent, useState} from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Dialogs from "./Dialogs";
import {PropsType} from "../Dialogs/Dialogs";
import {MemoryRouter} from 'react-router-dom';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Dialogs',
    component: Dialogs ,
}

const Template: Story<PropsType> = (args) => <MemoryRouter><Dialogs {...args}/></MemoryRouter>;

export const DialogsStory = Template.bind({})
const callback = action('click on button')
const callback0 = action('change input value')
DialogsStory.args = {
    dialogsPage: {
        dialogsData: [
            {name: 'Andrey', id: 1},
            {name: 'Eugene', id: 2},
            {name: 'Dimych', id: 3},
            {name: 'Diana', id: 4}
        ],
        messagesData: [
            {message: 'Hi', id: 0},
            {message: 'How are you', id: 1},
            {message: 'im here', id: 2}
        ],
        messageText: ''
    },
    addNewMessage: callback,
    onNewMessageChange: callback0
};
