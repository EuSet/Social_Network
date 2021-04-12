import {addNewMessage, onNewMessageChange} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";


const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
// const mapDispatchToProps = (dispatch: (action:DialogsActionType) => void) => {
//     return {
//         addNewMessage: () => {
//             dispatch(addNewMessage())
//         },
//         onNewMessageChange: (messageBody:string) => {
//             dispatch(onNewMessageChange(messageBody))
//         }
//     }
// }
const DialogsContainer = connect(mapStateToProps, {
    addNewMessage, onNewMessageChange
})(Dialogs)

export default DialogsContainer;