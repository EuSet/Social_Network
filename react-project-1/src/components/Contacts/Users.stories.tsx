import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {PropsType, Users} from "./Users";
import {MemoryRouter} from 'react-router-dom';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Users',
    component: Users ,
}

const Template: Story<PropsType> = (args) => <MemoryRouter><Users {...args}/></MemoryRouter>;
const callback = action('click on follow/unfollow button')
export const ContactsStory = Template.bind({});
ContactsStory.args = {
    contactsData: [
        {
            id: 1,
            followed:false,
            location:{country:'Belarus',city:'Minsk'},
            name: 'Andrey Petrov',
            photos:{
                small:'',
                large:'https://sun9-55.userapi.com/impf/c853424/v853424997/ac872/cW5Jd0rrnZA.jpg?size=1080x1080&quality=96&proxy=1&sign=4d8c145dab34bc22a5da2335cd143436&type=album'},
            status:'',
            uniqueUrlName:''
        },
        {
            id: 2,
            followed:false,
            location:{country:'Belarus',city:'Minsk'},
            name: 'Dmitry Ivanov',
            photos:{small:'',
                large: 'http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-8.jpg'},
            status:'',
            uniqueUrlName:''
        }
    ],
    followNewContact:callback
};