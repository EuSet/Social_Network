import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import ProfileInfo from "./ProfileInfo";


export default {
    title: 'ProfileInfo',
    component: ProfileInfo,
}

export const Template = () => <MemoryRouter><ProfileInfo/></MemoryRouter>;
