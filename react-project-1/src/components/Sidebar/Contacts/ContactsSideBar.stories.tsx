import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import ContactsSideBar from "./ContactsSideBar";



export default {
    title: 'ContactsSideBar',
    component: ContactsSideBar,
}

export const Template = () => <MemoryRouter><ContactsSideBar/></MemoryRouter>;