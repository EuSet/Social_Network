import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Sidebar from "./Sidebar";



export default {
    title: 'Sidebar',
    component: Sidebar,
}

export const Template = () => <MemoryRouter><Sidebar/></MemoryRouter>;