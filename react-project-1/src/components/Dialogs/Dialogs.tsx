import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialogitems from "./Dialogitems/Dialogitems";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {DialogsFormDataType, DialogsReduxForm} from "./DialogsForm";


export type PropsType = {
    dialogsPage: DialogsPageType
    addMessage:(newMessage:string) => void
    isAuth:boolean
}

const Dialogs = (props: PropsType) => {
    let addNewMessage = (formData:DialogsFormDataType) => {
        props.addMessage(formData.message)
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
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    </div>
}

export default Dialogs;
