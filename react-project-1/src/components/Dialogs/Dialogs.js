import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogitems = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.item + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props) => {
    return <div className={s.Dialogs}>
        <div className={s.dialogsItems}>
            <Dialogitems name='Andrey' id='1'/>
            <Dialogitems name='Eugene' id='2'/>
            <Dialogitems name='Dimych' id='3'/>
            <Dialogitems name='Diana' id='4'/>
        </div>
        <div className={s.hr}>
        </div>
        <div className={s.messages}>
            <Message message='Hi'/>
            <Message message='How are you'/>
            <Message message='im here'/>
        </div>
    </div>
}

export default Dialogs;