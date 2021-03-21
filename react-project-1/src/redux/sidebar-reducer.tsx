import React from "react";
import {SidebarType} from "./Store";

const initialState = {
    contactsData: [
        {
            id: 'andrey',
            name: 'Andrey Petrov',
            avatar: 'https://sun9-55.userapi.com/impf/c853424/v853424997/ac872/cW5Jd0rrnZA.jpg?size=1080x1080&quality=96&proxy=1&sign=4d8c145dab34bc22a5da2335cd143436&type=album'
        },
        {
            id: 'andrey',
            name: 'Dmitry Ivanov',
            avatar: 'http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-8.jpg'
        }
    ]
}

const sidebarReducer = (state:SidebarType = initialState, action:any) => {

    return state
}

export default sidebarReducer;