import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return  <div className={s.sidebar}>
        <ul>
            <li className={`${s.item} ${s.active}`}><a href='/profile'>Profile</a></li>
            <li className={s.item}><a href='/dialogs'>Message</a></li>
            <li className={s.item}><a href='/feed'>News</a></li>
            <li className={s.item}><a href='/music'>Music</a></li>
            <li className={s.item}><a href='/settings'>Settings</a></li>
        </ul>
    </div>
}

export default Sidebar;