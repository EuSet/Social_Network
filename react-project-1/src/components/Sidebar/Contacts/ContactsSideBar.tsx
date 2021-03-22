import React from 'react';
import s from './ContactsSideBar.module.css';
import a from '../../Contacts/Contacts.module.css'
import {NavLink} from "react-router-dom";
import Contactsicons from "../../../img/icons8-толпа-48.png"


const ContactsSideBar = () => {

    return  <div className={s.contacts}>
           <div className={s.contactList}>
               <NavLink to='/contacts' activeClassName={a.contacts}><img src={Contactsicons}/>Contacts</NavLink>
           </div>
    </div>
}
export default ContactsSideBar;
