import React from "react";

type ContactsDataFriendType = {
    id:string
    name:string
    avatar:string
}
export type ContactsDataType = Array<ContactsDataFriendType>
export type SidebarType = {
    contactsData:ContactsDataType
}
export type MessagePostType = {
    message:string
    quantityOfLikes:number
}
type NewPostTextType = string
type PostDataType = Array<MessagePostType>
export type ProfilePageType = {
    postsData:PostDataType
    newPostText:NewPostTextType
}
export type MessageDialogsType = {
    message:string
    id:number
}
export type MessageDataType = Array<MessageDialogsType>
type DialogsNameType = {
    name:string
    id:number
}
type DialogsDataType = Array<DialogsNameType>
export type DialogsPageType = {
    dialogsData:DialogsDataType
    messagesData:MessageDataType
    messageText:string
}
export type StateType = {
    dialogsPage:DialogsPageType
    profilePage:ProfilePageType
    sidebarPage:SidebarType
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE'
const ADD_DIALOGS_MESSAGE = 'ADD-DIALOGS-MESSAGE'

export const addPostCreateActions = () => {
    return {type:ADD_POST}
}
export const onPostChangeCreateAction = (addNewPost:string) => {
    return {type:UPDATE_NEW_POST_CHANGE, newText: addNewPost}
}
export const onMessageChangeCreateAction = (addNewMessage:string) => {
    return {type:UPDATE_NEW_MESSAGE_CHANGE, newMessage: addNewMessage}
}
export const addNewMessageCreateActions = () => {
    return {type:ADD_DIALOGS_MESSAGE}
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
    _addPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            quantityOfLikes: 0
        }

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _updateNewPostChange(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    _updateNewMessageChange(newMessageText: string) {
        this._state.dialogsPage.messageText = newMessageText
        this._callSubscriber()
    },
    _addDialogsMessage() {
        let newDialogMessage = {
            message: this._state.dialogsPage.messageText,
            id: this._state.dialogsPage.messagesData.length + 1
        }
        this._state.dialogsPage.messagesData.push(newDialogMessage)
        this._state.dialogsPage.messageText = ''
        this._callSubscriber()
    },
    subscribe(observer:() => void) {
        this._callSubscriber = observer
        console.log('function called')

    },
    dispatch(action:any){
        if(action.type === 'ADD-POST'){
            this._addPost()
        } else if(action.type === 'UPDATE-NEW-POST-CHANGE'){
            this._updateNewPostChange(action.newText)
        } else if(action.type === 'ADD-DIALOGS-MESSAGE'){
            this._addDialogsMessage()
        } else if(action.type === 'UPDATE-NEW-MESSAGE-CHANGE'){
            this._updateNewMessageChange(action.newMessage)
        }
    }
}
