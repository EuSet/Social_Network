import React from 'react';
import {NavLink} from "react-router-dom";
// @ts-ignore
import s from "./Contacts.module.css"
import {ContactsDataFriendType, ContactsDataType} from "../../redux/contacts-reducer";
import axios from "axios";
// @ts-ignore
import ContactsAvatar from './../../img/icons8-профиль-кошки-96.png'


export type PropsType = {
    contactsData: ContactsDataType
    followNewContact: (id: number) => void
    setContacts: (constants: ContactsDataType) => void
}

export class ContactsClass extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setContacts(response.data.items)
        })
    }

    render(): React.ReactNode {
        return <div className={s.contacts}>
            {this.props.contactsData.map((c: ContactsDataFriendType) => <div>
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
                            this.props.followNewContact(c.id)
                        }}>{c.followed ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </div>
            )}
        </div>

    }
}