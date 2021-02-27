import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import Dialogitems from "./Dialogitems/Dialogitems";

let newMessage = React.createRef()
let addNewMessage = () => {
    let addMessage = newMessage.current.value
    alert(addMessage)
}

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(d => <Dialogitems name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map( m => <Message message={m.message}/>);
    return <div className={s.Dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.hr}>
        </div>
        <div className={s.messages}>
            {messagesElements}
            <div>
                <textarea ref={newMessage}/>
                <button onClick={addNewMessage}>add message</button>
            </div>
        </div>
    </div>
}

export default Dialogs;