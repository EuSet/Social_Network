import React from 'react'
import s from "./Contacts.module.css";
import {ContactsDataFriendType, ContactsDataType} from "../../redux/contacts-reducer";
import {NavLink} from "react-router-dom";
import ContactsAvatar from "../../img/icons8-профиль-кошки-96.png";
import {usersAPI} from "../../api/api";

export type PropsType = {
    contactsData: ContactsDataType
    pageSize: number
    totalCount: number
    currentPage: number
    followNewContact: (id: number) => void
    unFollow: (id: number) => void
    onPageChanged: (count: number) => void
    setToggleBtnDisabled: (toggle: boolean, id: number) => void
    progressBtnDisabled: Array<number>
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
                    {c.followed ? <button disabled={props.progressBtnDisabled.some(id => id === c.id)} onClick={() => {
                            props.setToggleBtnDisabled(true, c.id)
                            usersAPI.unFollowUser(c.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.unFollow(c.id)
                                }
                                props.setToggleBtnDisabled(false, c.id)
                            })
                        }}>UnFollow</button> :
                        <button disabled={props.progressBtnDisabled.some(id => id === c.id)} onClick={() => {
                            props.setToggleBtnDisabled(true, c.id)
                            usersAPI.followUser(c.id).then(data => {
                                if (data.resultCode === 0) {
                                    props.followNewContact(c.id)
                                }
                                props.setToggleBtnDisabled(false, c.id)
                            })
                        }}>Follow</button>}
                </div>
            </div>
        )}
    </div>
}