import React from 'react';
import s from './Contacts.module.css';
import {NavLink} from "react-router-dom";

const Contacts = (props) => {
    let path = '/' + props.id;
    return  <div className={s.contacts}>
        <NavLink to={path}>
            <div className={s.contactsAvatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.contactsName}>
                {props.name}
            </div>
        </NavLink>
    </div>
}
export default Contacts;