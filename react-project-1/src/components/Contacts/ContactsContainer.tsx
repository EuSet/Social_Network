import React from 'react';
import {connect} from "react-redux";
import {
    setCurrentCountCA,
    ContactsActionType,
    ContactsDataType,
    followCA,
    setContactsAC, setTotalCountContactsCA
} from "../../redux/contacts-reducer";
import {StateType} from "../../redux/redux-store";
import {ContactsClass} from "./ContactsClass";


const mapStateToProps = (state:StateType) => {
    return {
        contactsData: state.contactsPage.contactsData,
        pageSize:state.contactsPage.pageSize,
        totalCount:state.contactsPage.totalCount,
        currentPage:state.contactsPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: (action:ContactsActionType) => void) => {
    return {
        followNewContact: (id: number) => {
            dispatch(followCA(id))
        },
        setContacts: (contacts:ContactsDataType) => {
            dispatch(setContactsAC(contacts))
        },
        setCurrentCount: (count:number) => {
            dispatch(setCurrentCountCA(count))
        },
        setTotalCountContacts: (totalCount:number) => {
            dispatch(setTotalCountContactsCA(totalCount))
        }
    }
}
const ContactsContainer = connect(mapStateToProps,mapDispatchToProps)(ContactsClass)

export default ContactsContainer