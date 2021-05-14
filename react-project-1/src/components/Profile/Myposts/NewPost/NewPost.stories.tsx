import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {MemoryRouter} from 'react-router-dom';
import NewPost, {PropsType} from "./NewPost";
import {action} from "@storybook/addon-actions";


export default {
    title: 'NewPost',
    component: NewPost ,
}

const Template: Story<PropsType> = (args) => <MemoryRouter><NewPost {...args}/></MemoryRouter>;
const callback = action('Add new Post')
export const NewPostStory = Template.bind({});
NewPostStory.args = {
    addNewPostThunk: callback,
};
