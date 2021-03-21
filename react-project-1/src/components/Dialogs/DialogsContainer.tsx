import React from 'react';
import {addNewMessageCreateActions, onMessageChangeCreateAction} from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/Store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state:StateType) => {
    return {
        dialogsPage:state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action:any) => void) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageCreateActions())
        },
        onNewMessageChange: (messageBody:string) => {
            dispatch(onMessageChangeCreateAction(messageBody))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;