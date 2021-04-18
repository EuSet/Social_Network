import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Profile, {PropsType} from "./Profile";
import {Provider} from "react-redux";
import {store} from "../../redux/redux-store";


export default {
    title: 'Profile',
    component: Profile,
}

export const Template = (props:PropsType) => <Provider store={store}><MemoryRouter><Profile profile={props.profile}/></MemoryRouter></Provider>;


