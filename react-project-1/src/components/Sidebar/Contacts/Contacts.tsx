import React from 'react';
import s from './Contacts.module.css';
import {NavLink} from "react-router-dom";
import Contactsicons from "../../../img/icons8-толпа-48.png"
import {ContactsDataType} from "../../../redux/State";

type PropsType = {
    contactsData:ContactsDataType
}
const Contacts = (props:PropsType) => {
    let contactsElements = props.contactsData.map(c =>  <NavLink to={'/' + c.id}>
        <div className={s.contactsAvatar}>
            <img src={c.avatar}/>
        </div>
        <div className={s.contactsName}>
            {c.name}
        </div>
    </NavLink>);

    return  <div className={s.contacts}>
           <div className={s.contactList}>
               <NavLink to='/contacts'><img src={Contactsicons}/>Contacts</NavLink>
           </div>
        {contactsElements}
    </div>
}
export default Contacts;