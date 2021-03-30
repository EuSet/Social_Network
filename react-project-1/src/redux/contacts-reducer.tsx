import React from "react";

export type ContactsPageType = {
    contactsData: ContactsDataType
}
export type ContactsDataType = Array<ContactsDataFriendType>
export type ContactsDataFriendType = {
    id: number
    location: { country: string, city: string }
    name: string
    followed: boolean
    status: string
    photos: {
        small: string
        large: string
    }
    uniqueUrlName: string
}

const initialState = {

    contactsData: []
}
const FOLLOW = 'FOLLOW'
const SET_CONTACTS = 'SET_CONTACTS'
const contactsReducer = (state: ContactsPageType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                contactsData: state.contactsData.map(c => {
                    if (action.idUser === c.id) {
                        return {...c, followed: !c.followed}
                    }
                    return c
                })
            }
        case SET_CONTACTS:
            return {...state, contactsData: action.contacts}
        default:
            return state
    }
}
export const followCA = (id: number) => {
    return {type: FOLLOW, idUser: id}
}
export const setContactsAC = (contacts: ContactsDataType) => {
    return {type: SET_CONTACTS, contacts: contacts}
}

export default contactsReducer;