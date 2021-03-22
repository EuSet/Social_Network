import React from 'react';
import {connect} from "react-redux";
import Contacts from "./Contacts";
import {followCA} from "../../redux/contacts-reducer";
import {StateType} from "../../redux/redux-store";


const mapStateToProps = (state:StateType) => {
    debugger
    return {
        contactsData: state.contactsPage.contactsData
    }
}

const mapDispatchToProps = (dispatch: (action:any) => void) => {
    return {
        followNewContact: (id: number) => {
            dispatch(followCA(id))
        },
    }
}
const ContactsContainer = connect(mapStateToProps,mapDispatchToProps)(Contacts)

export default ContactsContainer