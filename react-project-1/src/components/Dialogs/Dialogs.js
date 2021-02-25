import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import Dialogitems from "./Dialogitems/Dialogitems";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <Dialogitems name={d.name} id={d.id}/>);
    let messagesElements = props.state.messagesData.map( m => <Message message={m.message}/>);
    return <div className={s.Dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.hr}>
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
}

export default Dialogs;