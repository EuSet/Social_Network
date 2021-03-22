import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Contacts.module.css"
import {ContactsDataType} from "../../redux/contacts-reducer";


type PropsType = {
    contactsData:ContactsDataType
    followNewContact: (id:number) => void
}

const Contacts = (props:PropsType) => {

    let contactsElements = props.contactsData.map(c =>  <div>
        <NavLink to={'/' + c.id}>
        <div className={s.contactsAvatar}>
            <img src={c.avatar}/>
        </div>
        <div className={s.contactsName}>
            {c.name}
        </div>
    </NavLink>
        <div>
            <button onClick={() => {props.followNewContact(c.id)}}>{c.following ? 'Follow' : 'Unfollow'}</button>
        </div>
    </div>
   );

    return  <div className={s.contacts}>
        {contactsElements}
     </div>
}
export default Contacts;