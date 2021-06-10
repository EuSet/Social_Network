import {NavLink} from "react-router-dom";
import s from "./Contacts.module.css";
import ContactsAvatar from "../../img/icons8-профиль-кошки-96.png";
import React from "react";
import {ContactsDataFriendType} from "../../redux/contacts-reducer";

type PropsType = {
    c: ContactsDataFriendType
    progressBtnDisabled: Array<number>
    unFollowUserThunk: (id:number) => void
    followUserThunk: (id:number) => void
}

export const User:React.FC<PropsType> = ({c, ...props}) => {
    return  <div>
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
                    props.unFollowUserThunk(c.id)
                }}>unFollow</button> :
                <button disabled={props.progressBtnDisabled.some(id => id === c.id)} onClick={() => {
                    props.followUserThunk(c.id)
                }}>Follow</button>}
        </div>
    </div>
}
