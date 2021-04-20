import {combineReducers,createStore, applyMiddleware} from "redux"
import profileReducer, {ProfilePageType} from "./profile-reducer";
import dialogsReducer, {DialogsPageType} from "./dialogs-reducer";
import contactsReducer, {ContactsPageType} from "./contacts-reducer";
import authReducer, {AuthType} from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";

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
export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
