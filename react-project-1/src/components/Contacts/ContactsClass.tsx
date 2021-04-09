import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Contacts.module.css"
import {ContactsDataFriendType, ContactsDataType} from "../../redux/contacts-reducer";
import axios from "axios";
import ContactsAvatar from './../../img/icons8-профиль-кошки-96.png'


export type PropsType = {
    contactsData: ContactsDataType
    pageSize:number
    totalCount:number
    currentPage:number
    followNewContact: (id: number) => void
    setContacts: (constants: ContactsDataType) => void
}

export class ContactsClass extends React.Component<any, any> {
    // constructor(props: any) {
    //     super(props);
    //
    // }
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setContacts(response.data.items)
            this.props.setTotalCountContacts(response.data.totalCount)
        })
    }
    onPageChanged = (p:number) => {
        this.props.setCurrentCount(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setContacts(response.data.items)
        })
    }

    render(): React.ReactNode {
           let pageCount =  Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages:Array<number> = []
        for(let i = 1; i <= pageCount; i++){
            pages = [...pages,i]
            // pages.push(i)
        }
        return <div className={s.contacts}>
            <div>
                {pages.map(p => {
                    return <span onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p ? s.currentPage : ''}>{p} </span>
                })}
            </div>
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