import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {MemoryRouter} from 'react-router-dom';
import MyPosts, {PropsType} from "./MyPosts";
import {Provider} from "react-redux";
import {store} from "../../../redux/redux-store";


export default {
    title: 'MyPosts',
    component: MyPosts ,
}

const Template: Story<PropsType> = (args) => <Provider store={store}><MemoryRouter><MyPosts {...args}/></MemoryRouter></Provider> ;

export const MyPostsStory = Template.bind({});
MyPostsStory.args = {
    postsData:[
        {message: 'Hi, how are you', quantityOfLikes: 10, id:1},
        {message: 'It\'s my first post', quantityOfLikes: 17, id:2},
    ],
};