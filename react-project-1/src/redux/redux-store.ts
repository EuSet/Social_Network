import {combineReducers,createStore} from "redux"
import profileReducer, {ProfilePageType} from "./profile-reducer";
import dialogsReducer, {DialogsPageType} from "./dialogs-reducer";
import contactsReducer, {ContactsPageType} from "./contacts-reducer";
import authReducer, {AuthType} from "./Auth-reducer";

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    contactsPage:ContactsPageType
    authData: AuthType
}

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        contactsPage: contactsReducer,
        authData: authReducer
    }
)
export let store = createStore(reducers);
