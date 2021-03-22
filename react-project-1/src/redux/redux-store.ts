import {combineReducers,createStore} from "redux"
import profileReducer, {ProfilePageType} from "./profile-reducer";
import dialogsReducer, {DialogsPageType} from "./dialogs-reducer";
import contactsReducer, {ContactsPageType} from "./contacts-reducer";

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    contactsPage:ContactsPageType
}

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        contactsPage: contactsReducer
    }
)
export let store = createStore(reducers);
