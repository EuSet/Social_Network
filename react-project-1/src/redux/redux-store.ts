import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import contactsReducer from "./contacts-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


export type StateType = ReturnType<typeof reducers>
let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        contactsPage: contactsReducer,
        profilePage: profileReducer,
        authData: authReducer,
        form: formReducer
    }
)
export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store

