import React from 'react';
import {connect} from "react-redux";
import {
    ContactsActionType,
    ContactsDataType,
    followCA,
    setContactsAC,
    setCurrentCountCA,
    setTotalCountContactsCA, togglePreloader
} from "../../redux/contacts-reducer";
import {StateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";


const mapStateToProps = (state:StateType) => {
    return {
        contactsData: state.contactsPage.contactsData,
        pageSize:state.contactsPage.pageSize,
        totalCount:state.contactsPage.totalCount,
        currentPage:state.contactsPage.currentPage,
        togglePreloader:state.contactsPage.togglePreloader
    }
}
class UsersClassContainer extends React.Component<any, any> {
    // constructor(props: any) {
    //     super(props);
    //
    // }
    componentDidMount(): void {
        this.props.setTogglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setTogglePreloader(false)
            this.props.setContacts(response.data.items)
            this.props.setTotalCountContacts(response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentCount(p)
        this.props.setTogglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setContacts(response.data.items)
            this.props.setTogglePreloader(false)
        })
    }

    render(): React.ReactNode {
        return this.props.togglePreloader ? <Preloader/> : <Users
            contactsData={this.props.contactsData}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            followNewContact={this.props.followNewContact}
            onPageChanged={this.onPageChanged}
        />
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
        },
        setTogglePreloader: (toggle:boolean) => {
            dispatch(togglePreloader(toggle))
        }
    }
}

const ContactsContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClassContainer)

export default ContactsContainer