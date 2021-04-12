export type DialogsPageType = {
    dialogsData: DialogsDataType
    messagesData: MessageDataType
    messageText: string
}
type MessageDataType = Array<MessageDialogsType>
type MessageDialogsType = {
    message: string
    id: number
}
type DialogsDataType = Array<DialogsNameType>
type DialogsNameType = {
    name: string
    id: number
}
export type DialogsActionType = ReturnType<typeof onNewMessageChange> | ReturnType<typeof addNewMessage>

const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE'
const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'

const initialState = {
    dialogsData: [
        {name: 'Andrey', id: 1},
        {name: 'Eugene', id: 2},
        {name: 'Dimych', id: 3},
        {name: 'Diana', id: 4}
    ],
    messagesData: [
        {message: 'Hi', id: 0},
        {message: 'How are you', id: 1},
        {message: 'im here', id: 2}
    ],
    messageText: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType) => {
    switch (action.type) {
        case 'ADD-DIALOGS-MESSAGE':
            let newDialogMessage = {
                message: state.messageText,
                id: state.messagesData.length + 1
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newDialogMessage],
                messageText: state.messageText = ''
            }
        case 'UPDATE-NEW-MESSAGE-CHANGE':
            return {
                ...state,
                messageText: action.newMessage
            }
        default:
            return state
    }
}

export const onNewMessageChange = (addNewMessage: string) => {
    return {type: UPDATE_NEW_MESSAGE_CHANGE, newMessage: addNewMessage} as const
}
export const addNewMessage = () => {
    return {type: ADD_DIALOGS_MESSAGE} as const
}
export default dialogsReducer;