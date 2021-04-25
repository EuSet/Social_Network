import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialogitems from "./Dialogitems/Dialogitems";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";


export type PropsType = {
    dialogsPage: DialogsPageType
    addNewMessage:() => void
    onNewMessageChange:(messageBody:string) => void
    isAuth:boolean
}

const Dialogs = (props: PropsType) => {
    let addNewMessage = () => {
        props.addNewMessage()
    }
    let messageBody = props.dialogsPage.messageText
    let onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        messageBody = e.target.value
        props.onNewMessageChange(messageBody)
    }


    let dialogsElements = props.dialogsPage.dialogsData.map(d => <Dialogitems name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message id={m.id} message={m.message}/>);

    // if(!props.isAuth) return <Redirect to={'/login'}/>
    return <div className={s.Dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.hr}>
        </div>
        <div className={s.messages}>
            {messagesElements}
            <div>
                <textarea onChange={onMessageChange} value={messageBody}/>
                <button onClick={() => {addNewMessage()}}>add message</button>
            </div>
        </div>
    </div>
}

export default Dialogs;