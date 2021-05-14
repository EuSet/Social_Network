import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import Dialogs from "./Dialogs";
import {PropsType} from "./Dialogs";
import {MemoryRouter} from 'react-router-dom';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Dialogs',
    component: Dialogs ,
}

const Template: Story<PropsType> = (args) => <MemoryRouter><Dialogs {...args}/></MemoryRouter>;

export const DialogsStory = Template.bind({})
const callback = action('click on button')
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
    },
    addMessage: callback,
};
