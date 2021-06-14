import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";
import contactsReducer, {ContactsActionType} from "./contacts-reducer";
import authReducer, {AuthActionType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {AppActionType, appReducer} from "./app-reducer";


export type StateType = ReturnType<typeof reducers>
let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        contactsPage: contactsReducer,
        profilePage: profileReducer,
        authData: authReducer,
        form: formReducer,
        app: appReducer
    }
)
export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type RootActionsType = AppActionType | AuthActionType | ContactsActionType | DialogsActionType | ProfileActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, RootActionsType>
// @ts-ignore
window.store = store

