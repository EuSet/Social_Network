import React from 'react';
import s from './Sidebar.module.css';
import iconMusic from '../../img/icons8-микрофон-64.png';
import iconMessages from '../../img/icons8-облачко-с-мыслями-48.png';
import iconProfile from '../../img/icons8-войти-как-пользователь-48 (1).png';
import iconSettings from '../../img/icons8-fingerprint-settings-64.png';
import iconNews from '../../img/icons8-новости-48.png';
import Contactsicons from "../../img/icons8-толпа-48.png";
import {ItemComponent} from "./item";

const Sidebar = () => {
    return <div className={s.sidebar}>
            <ItemComponent text={'Profile'} icon={iconProfile} link={'profile'}/>
            <ItemComponent text={'Messages'} icon={iconMessages} link={'dialogs'}/>
            <ItemComponent text={'News'} icon={iconNews} link={'feed'}/>
            <ItemComponent text={'Music'} icon={iconMusic} link={'music'}/>
            <ItemComponent text={'Settings'} icon={iconSettings} link={'settings'}/>
            <ItemComponent text={'Contacts'} icon={Contactsicons} link={'contacts'}/>
        <hr/>
    </div>
}

export default Sidebar;
