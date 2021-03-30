import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {MemoryRouter} from 'react-router-dom';
import Feed, {PropsType} from "./Feed";


export default {
    title: 'Feed',
    component: Feed ,
}

const Template: Story<PropsType> = (args) => <MemoryRouter><Feed {...args}/></MemoryRouter>;

export const FeedsStory = Template.bind({});
FeedsStory.args = {
    feedsData: [
        {
            id: 1,
            title: 'Announcing Entity Framework Core (EF Core) 5 RC2 from .NET Blog',
            avatar: 'https://hub.packtpub.com/wp-content/uploads/2020/10/01MDT8N8E9HuYG7tV-mkqVEr-218x150.png'
        },
        {
            id: 2,
            title: 'MLOps: DevOps for Machine Learning from .NET Blog',
            avatar: 'https://hub.packtpub.com/wp-content/uploads/2020/10/survey-illustration-300x181-1-zeZNtM-218x150.png'
        }
    ]
};