import React from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

type ContactsDataFriendType = {
    id: string
    name: string
    avatar: string
}
export type ContactsDataType = Array<ContactsDataFriendType>
export type SidebarType = {
    contactsData: ContactsDataType
}
export type MessagePostType = {
    message: string
    quantityOfLikes: number
}
type NewPostTextType = string
export type PostDataType = Array<MessagePostType>
export type ProfilePageType = {
    postsData: PostDataType
    newPostText: NewPostTextType
}
export type MessageDialogsType = {
    message: string
    id: number
}
export type MessageDataType = Array<MessageDialogsType>
type DialogsNameType = {
    name: string
    id: number
}
type DialogsDataType = Array<DialogsNameType>
export type DialogsPageType = {
    dialogsData: DialogsDataType
    messagesData: MessageDataType
    messageText: string
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebarPage: SidebarType
}


export let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {name: 'Andrey', id: 1},
                {name: 'Eugene', id: 2},
                {name: 'Dimych', id: 3},
                {name: 'Diana', id: 4}
            ],
            messagesData: [
                {message: 'Hi', id: 0},
                {message: 'How are you', id: 1},
                {message: 'im here', id: 2}
            ],
            messageText: ''
        },
        profilePage: {
            postsData: [
                {message: 'Hi, how are you', quantityOfLikes: 10},
                {message: 'It\'s my first post', quantityOfLikes: 17},
            ],
            newPostText: ''
        },
        sidebarPage: {
            contactsData: [
                {
                    id: 'andrey',
                    name: 'Andrey Petrov',
                    avatar: 'https://sun9-55.userapi.com/impf/c853424/v853424997/ac872/cW5Jd0rrnZA.jpg?size=1080x1080&quality=96&proxy=1&sign=4d8c145dab34bc22a5da2335cd143436&type=album'
                },
                {
                    id: 'andrey',
                    name: 'Dmitry Ivanov',
                    avatar: 'http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/avatar-8.jpg'
                }
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
        console.log('function called')

    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
        this._callSubscriber()
    }
}
