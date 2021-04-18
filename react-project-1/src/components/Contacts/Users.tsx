import React from 'react'
import s from "./Contacts.module.css";
import {ContactsDataFriendType, ContactsDataType} from "../../redux/contacts-reducer";
import {NavLink} from "react-router-dom";
import ContactsAvatar from "../../img/icons8-профиль-кошки-96.png";
import axios from "axios";

export type PropsType = {
    contactsData: ContactsDataType
    pageSize: number
    totalCount: number
    currentPage: number
    followNewContact: (id: number) => void
    unFollow: (id: number) => void
    onPageChanged: (count: number) => void
}

export const Users = (props: PropsType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pageCount; i++) {
        pages = [...pages, i]
        // pages.push(i)
    }
    return <div className={s.contacts}>
        <div>
            {pages.map(p => {
                return props.currentPage + 3 > p && props.currentPage - 2 < p ?
                    <span onClick={() => props.onPageChanged(p)}
                          className={props.currentPage === p ? s.currentPage : ''}>{p} </span> : ''
            })}
        </div>
        {props.contactsData.map((c: ContactsDataFriendType) => <div>
                <NavLink to={'profile/' + c.id}>
                    <div className={s.contactsAvatar}>
                        <img src={c.photos.large ? c.photos.large : ContactsAvatar} alt={'#'}/>
                    </div>
                    <div className={s.contactsName}>
                        {c.name}
                        {c.status}
                    </div>
                </NavLink>
                <div>
                    {c.followed ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${c.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'bd25c1b4-72d5-4540-912d-5ef4c71f0544'
                            }
                        }).then(response => {
                            if(response.data.resultCode === 0){
                                props.unFollow(c.id)
                            }
                        })
                    }}>UnFollow</button> : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${c.id}`,{}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'bd25c1b4-72d5-4540-912d-5ef4c71f0544'
                            }
                        }).then(response => {
                            if(response.data.resultCode === 0){
                                props.followNewContact(c.id)
                            }
                        })
                    }}>Follow</button> }
                </div>
            </div>
        )}
    </div>
}