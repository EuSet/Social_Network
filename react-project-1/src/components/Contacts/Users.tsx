import React from 'react'
import s from "./Contacts.module.css";
import {ContactsDataFriendType, ContactsDataType} from "../../redux/contacts-reducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

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
    unFollowUserThunk: (id:number) => void
    followUserThunk: (id:number) => void
}

export const Users = (props: PropsType) => {
    return <div className={s.contacts}>
        <Paginator pageSize={props.pageSize}
                   totalCount={props.totalCount}
                   currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
        {props.contactsData.map((c: ContactsDataFriendType) =>
            <User key={c.id} c={c}
                  progressBtnDisabled={props.progressBtnDisabled}
                  unFollowUserThunk={props.unFollowUserThunk}
                  followUserThunk={props.followUserThunk}
            />
        )}
    </div>
}
