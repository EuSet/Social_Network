import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {MemoryRouter} from 'react-router-dom';
import Posts, {PropsType} from "./Posts";


export default {
    title: 'Posts',
    component: Posts,
}

const Template: Story<PropsType> = (args) => <MemoryRouter><Posts {...args}/></MemoryRouter>;

export const PostsStory = Template.bind({});
PostsStory.args = {
    message: 'Hello everyone',
    quantityOfLikes: 0
};