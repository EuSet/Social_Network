import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Header from "./Header";



export default {
    title: 'Header',
    component: Header,
}

export const Template = () => <MemoryRouter><Header/></MemoryRouter>;