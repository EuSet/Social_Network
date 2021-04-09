import React from 'react';
import {addNewMessageCreateActions, DialogsActionType, onMessageChangeCreateAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";


const mapStateToProps = (state:StateType) => {
    return {
        dialogsPage:state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action:DialogsActionType) => void) => {
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