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
type MessagePostType = {
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
type MessageDataType = Array<MessageDialogsType>
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
    addPost() {
        let newPost = {
            message: this._state.profilePage.newPostText,
            quantityOfLikes: 0
        }

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostChange(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    updateNewMessageText(newTextMessage: string) {
        this._state.dialogsPage.messageText = newTextMessage
        this._callSubscriber()
    },
    addDialogsMessage() {
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

    }
}
