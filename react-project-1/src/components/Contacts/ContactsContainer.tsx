import React from 'react';
import {connect} from "react-redux";
import Contacts from "./Contacts";
import {ContactsDataType, followCA, setContactsAC} from "../../redux/contacts-reducer";
import {StateType} from "../../redux/redux-store";
import {ContactsClass} from "./ContactsClass";


const mapStateToProps = (state:StateType) => {
    return {
        contactsData: state.contactsPage.contactsData
    }
}

const mapDispatchToProps = (dispatch: (action:any) => void) => {
    return {
        followNewContact: (id: number) => {
            dispatch(followCA(id))
        },
        setContacts: (contacts:ContactsDataType) => {
            dispatch(setContactsAC(contacts))

        }
    }
}
const ContactsContainer = connect(mapStateToProps,mapDispatchToProps)(ContactsClass)

export default ContactsContainer