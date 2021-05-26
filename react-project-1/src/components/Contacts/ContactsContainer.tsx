import React from 'react';
import {connect} from "react-redux";
import {
    ContactsDataType,
    followNewContact,
    followUserThunk,
    getUsers,
    setContacts,
    setCurrentCount,
    setToggleBtnDisabled,
    setTogglePreloader,
    setTotalCountContacts,
    unFollow,
    unFollowUserThunk
} from "../../redux/contacts-reducer";
import {StateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";
import {compose} from 'redux';

type PropsType = {
    followNewContact: (id: number) => void
    unFollow: (id: number) => void
    onPageChanged: (count: number) => void
    setToggleBtnDisabled: (toggle: boolean, id: number) => void
    progressBtnDisabled: Array<number>
    unFollowUserThunk: (id:number) => void
    followUserThunk: (id:number) => void
    getUsers:(currentPage: number, pageSize: number) => void
    setCurrentCount:(p:number) => void
    togglePreloader:boolean
    contactsData: ContactsDataType
    pageSize: number
    totalCount: number
    currentPage: number
}
const mapStateToProps = (state: StateType) => {
    return {
        contactsData: state.contactsPage.contactsData,
        pageSize: state.contactsPage.pageSize,
        totalCount: state.contactsPage.totalCount,
        currentPage: state.contactsPage.currentPage,
        togglePreloader: state.contactsPage.togglePreloader,
        progressBtnDisabled: state.contactsPage.progressBtnDisabled
    }
}

class UsersClassContainer extends React.Component<PropsType, StateType> {
    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setTogglePreloader(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setTogglePreloader(false)
        //     this.props.setContacts(data.items)
        //     this.props.setTotalCountContacts(data.totalCount)
        // })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentCount(p)
        this.props.getUsers(p, this.props.pageSize)
        // this.props.setTogglePreloader(true)
        // usersAPI.getUsers(p,this.props.pageSize).then(data => {
        //     this.props.setContacts(data.items)
        //     this.props.setTogglePreloader(false)
        // })
    }

    render(): React.ReactNode {
        return this.props.togglePreloader ? <Preloader/> : <Users
            contactsData={this.props.contactsData}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            followNewContact={this.props.followNewContact}
            unFollow={this.props.unFollow}
            onPageChanged={this.onPageChanged}
            setToggleBtnDisabled={this.props.setToggleBtnDisabled}
            progressBtnDisabled={this.props.progressBtnDisabled}
            unFollowUserThunk={this.props.unFollowUserThunk}
            followUserThunk={this.props.followUserThunk}
        />
    }
}

// const mapDispatchToProps = (dispatch: (action: ContactsActionType) => void) => {
//     return {
//         followNewContact: (id: number) => {
//             dispatch(followNewContact(id))
//         },
//         setContacts: (contacts: ContactsDataType) => {
//             dispatch(setContacts(contacts))
//         },
//         setCurrentCount: (count: number) => {
//             dispatch(setCurrentCount(count))
//         },
//         setTotalCountContacts: (totalCount: number) => {
//             dispatch(setTotalCountContacts(totalCount))
//         },
//         setTogglePreloader: (toggle: boolean) => {
//             dispatch(setTogglePreloader(toggle))
//         }
//     }
// }
// const authRedirectComponent = withAuthRedirect(UsersClassContainer)
// const ContactsContainer = connect(mapStateToProps, {
//     setTogglePreloader,
//     setTotalCountContacts,
//     setCurrentCount,
//     setContacts,
//     followNewContact,
//     unFollow,
//     setToggleBtnDisabled,
//     getUsers,
//     unFollowUserThunk,
//     followUserThunk
//
// })(authRedirectComponent)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setTogglePreloader,
        setTotalCountContacts,
        setCurrentCount,
        setContacts,
        followNewContact,
        unFollow,
        setToggleBtnDisabled,
        getUsers,
        unFollowUserThunk,
        followUserThunk
    }),
    // withAuthRedirect
)(UsersClassContainer)


