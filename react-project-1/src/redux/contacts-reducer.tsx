import React from "react";

export type ContactsPageType = {
    contactsData: ContactsDataType
    pageSize: number
    totalCount: number
    currentPage: number
    togglePreloader: boolean
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
    | ReturnType<typeof togglePreloader>

const initialState: ContactsPageType = {

    contactsData: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    togglePreloader: false
}
const FOLLOW = 'FOLLOW'
const SET_CONTACTS = 'SET_CONTACTS'
const SET_CURRENT_COUNT = 'SET_CURRENT_COUNT'
const SET_TOTAL_COUNT_CONTACTS = 'SET_TOTAL_COUNT_CONTACTS'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
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
        case TOGGLE_PRELOADER:
            return {...state, togglePreloader: action.toggle}
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
export const togglePreloader = (toggle: boolean) => {
    return {type: TOGGLE_PRELOADER, toggle}
}

export default contactsReducer;