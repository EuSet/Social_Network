import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Contacts.module.css"
import {ContactsDataType} from "../../redux/contacts-reducer";
import axios from "axios";
import ContactsAvatar from './../../img/icons8-профиль-кошки-96.png'


export type PropsType = {
    contactsData: ContactsDataType
    followNewContact: (id: number) => void
    setContacts: (constants: ContactsDataType) => void
}

const Contacts = (props: PropsType) => {
    function getUsers() {
        if (props.contactsData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setContacts(response.data.items)
            })
        }
    }


    let contactsElements = props.contactsData.map(c => <div>
            <NavLink to={'/' + c.id}>
                <div className={s.contactsAvatar}>
                    <img src={c.photos.large ? c.photos.large : ContactsAvatar}/>
                </div>
                <div className={s.contactsName}>
                    {c.name}
                    {c.status}
                </div>
            </NavLink>
            <div>
                <button onClick={() => {
                    props.followNewContact(c.id)
                }}>{c.followed ? 'Follow' : 'Unfollow'}</button>
            </div>
        </div>
    );

    return <div className={s.contacts}>
        <button onClick={() => {
            getUsers()
        }}>Get users
        </button>
        {contactsElements}
    </div>
}
export default Contacts;