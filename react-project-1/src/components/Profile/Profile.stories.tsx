import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Profile from "./Profile";
import {Provider} from "react-redux";
import {store} from "../../redux/redux-store";


export default {
    title: 'Profile',
    component: Profile,
}

export const Template = () => <Provider store={store}><MemoryRouter><Profile/></MemoryRouter></Provider>;


