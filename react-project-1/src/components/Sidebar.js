import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return  <div className={s.sidebar}>
        <ul>
            <li className={`${s.item} ${s.active}`}><a href='#'/>Profile</li>
            <li className={s.item}><a href='#'/>Message</li>
            <li className={s.item}><a href='#'/>News</li>
            <li className={s.item}><a href='#'/>Music</li>
            <li className={s.item}><a href='#'/>Settings</li>
        </ul>
    </div>
}

export default Sidebar;