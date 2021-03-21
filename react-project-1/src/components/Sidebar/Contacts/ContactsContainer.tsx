import React from 'react';
import {connect} from "react-redux";
import Contacts from "./Contacts";
import {StateType} from "../../../redux/Store";

const mapStateToProps = (state:StateType) => {
    return {
        contactsData: state.sidebarPage.contactsData
    }
}
const ContactsContainer = connect(mapStateToProps)(Contacts)

export default ContactsContainer