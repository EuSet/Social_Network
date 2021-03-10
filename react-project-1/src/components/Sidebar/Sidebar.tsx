import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import iconMusic from '../../img/icons8-микрофон-64.png';
import iconMessages from '../../img/icons8-облачко-с-мыслями-48.png';
import iconProfile from '../../img/icons8-войти-как-пользователь-48 (1).png';
import iconSettings from '../../img/icons8-fingerprint-settings-64.png';
import iconNews from '../../img/icons8-новости-48.png';
import Contacts from "./Contacts/Contacts";
import {SidebarType} from "../../redux/State";

type PropsType = {
    sidebarPage: SidebarType
}

const Sidebar = (props: PropsType) => {
    return <div className={s.sidebar}>
        <ul>
            <li className={s.item}><NavLink to='/profile' activeClassName={s.activeLink}><img src={iconProfile}/>Profile</NavLink>
            </li>
            <li className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}><img src={iconMessages}/>Message</NavLink>
            </li>
            <li className={s.item}><NavLink to='/feed' activeClassName={s.activeLink}><img
                src={iconNews}/>News</NavLink></li>
            <li className={s.item}><NavLink to='/music' activeClassName={s.activeLink}><img
                src={iconMusic}/>Music</NavLink></li>
            <li className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}><img src={iconSettings}/>Settings</NavLink>
            </li>
        </ul>
        <hr/>
        <Contacts contactsData={props.sidebarPage.contactsData}/>
    </div>
}

export default Sidebar;