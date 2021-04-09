import React from "react";

export type ContactsPageType = {
    contactsData: ContactsDataType
    pageSize: number
    totalCount: number
    currentPage: number
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
export type ContactsActionType =
    ReturnType<typeof followCA>
    | ReturnType<typeof setContactsAC>
    | ReturnType<typeof setCurrentCountCA>
    | ReturnType<typeof setTotalCountContactsCA>

const initialState: ContactsPageType = {

    contactsData: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
}
const FOLLOW = 'FOLLOW'
const SET_CONTACTS = 'SET_CONTACTS'
const SET_CURRENT_COUNT = 'SET_CURRENT_COUNT'
const SET_TOTAL_COUNT_CONTACTS = 'SET_TOTAL_COUNT_CONTACTS'
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
        case SET_CURRENT_COUNT:
            return {...state, currentPage: action.newCurrentPage}
        case SET_TOTAL_COUNT_CONTACTS:
            return {...state, totalCount: action.totalCount}
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
export const setCurrentCountCA = (count: number) => {
    return {type: SET_CURRENT_COUNT, newCurrentPage: count}
}
export const setTotalCountContactsCA = (totalCount: number) => {
    return {type: SET_TOTAL_COUNT_CONTACTS, totalCount}
}

export default contactsReducer;