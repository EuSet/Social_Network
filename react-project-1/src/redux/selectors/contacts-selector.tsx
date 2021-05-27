import {StateType} from "../redux-store";
import {createSelector} from "reselect";

const getContactsDataSelector = (state: StateType) => {
    return state.contactsPage.contactsData
}
export const getContactsData = createSelector(getContactsDataSelector, (contactsData) => {
    return contactsData.filter(c => true)
})
export const getPageSize = (state: StateType) => {
    return state.contactsPage.pageSize
}
export const getTotalCount = (state: StateType) => {
    return state.contactsPage.totalCount
}
export const getCurrentPage = (state: StateType) => {
    return state.contactsPage.currentPage
}
export const getTogglePreloader = (state: StateType) => {
    return state.contactsPage.togglePreloader
}
export const getProgressBtnDisabled = (state: StateType) => {
    return state.contactsPage.progressBtnDisabled
}
