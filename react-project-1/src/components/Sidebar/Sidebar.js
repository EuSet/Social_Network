import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return  <div className={s.sidebar}>
        <ul>
            <li className={s.item}><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></li>
            <li className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink></li>
            <li className={s.item}><NavLink to='/feed' activeClassName={s.activeLink}>News</NavLink></li>
            <li className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></li>
            <li className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></li>
        </ul>
    </div>
}

export default Sidebar;