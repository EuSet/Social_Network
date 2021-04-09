import React from "react";

export type ProfilePageType = {
    postsData: PostDataType
    newPostText: NewPostTextType
}
export type PostDataType = Array<MessagePostType>
type MessagePostType = {
    message: string
    quantityOfLikes: number
}
type NewPostTextType = string
export type ProfileActionType = ReturnType<typeof addPostCreateActions> | ReturnType<typeof onPostChangeCreateAction>


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'

const inintialState = {
    postsData: [
        {message: 'Hi, how are you', quantityOfLikes: 10},
        {message: 'It\'s my first post', quantityOfLikes: 17},
    ],
        newPostText: ''
}

const profileReducer = (state: ProfilePageType = inintialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                message: state.newPostText,
                quantityOfLikes: 0
            }
            return {
                ...state,
                postsData:[...state.postsData,newPost],
                newPostText:state.newPostText = ''
            }
        case 'UPDATE-NEW-POST-CHANGE':
            return {
                ...state,
                newPostText:action.newText
            }
        default:
            return state
    }
}

export const addPostCreateActions = () => {
    return {type: ADD_POST} as const
}
export const onPostChangeCreateAction = (createNewPost: string) => {
    return {type: UPDATE_NEW_POST_CHANGE, newText: createNewPost} as const
}
export default profileReducer;

