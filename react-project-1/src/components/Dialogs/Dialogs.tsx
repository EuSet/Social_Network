import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialogitems from "./Dialogitems/Dialogitems";
import {DialogsPageType} from "../../redux/State";


type PropsType = {
    dialogsPage:DialogsPageType
    addDialogsMessage:() => void
    updateNewMessageText: (newTextMessage: string) => void
}
const Dialogs = (props:PropsType) => {
    let newMessage:any = React.createRef()
    let addNewMessage = () => {
        props.addDialogsMessage()
    }
    let onMessageChange = () => {
        let addMessage = newMessage.current.value
        props.updateNewMessageText(addMessage)
    }

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <Dialogitems name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map( m => <Message id={m.id} message={m.message}/>);


    return <div className={s.Dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.hr}>
        </div>
        <div className={s.messages}>
            {messagesElements}
            <div>
                <textarea onChange={onMessageChange} ref={newMessage} value={props.dialogsPage.messageText}/>
                <button onClick={addNewMessage}>add message</button>
            </div>
        </div>
    </div>
}

export default Dialogs;