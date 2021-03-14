import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialogitems from "./Dialogitems/Dialogitems";
import {
    addNewMessageCreateActions,
    DialogsPageType, onMessageChangeCreateAction
} from "../../redux/State";


type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: any) => void
}

const Dialogs = (props: PropsType) => {
    let addNewMessage = () => {
        props.dispatch(addNewMessageCreateActions())
    }
    let messageBody = props.dialogsPage.messageText
    let onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        messageBody = e.target.value
        props.dispatch(onMessageChangeCreateAction(messageBody))
    }


    let dialogsElements = props.dialogsPage.dialogsData.map(d => <Dialogitems name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message id={m.id} message={m.message}/>);

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