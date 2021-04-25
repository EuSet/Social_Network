import {ContactsDataFriendType} from "./contacts-reducer";
import {usersAPI} from "../api/api";

export type ProfilePageType = {
    postsData: PostDataType
    newPostText: NewPostTextType
    profile: profileType | null
}
export type profileType = {
    aboutMe: string
    contacts: { facebook: string, website: null, vk: string, twitter: string, instagram: string }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number
}
export type PostDataType = Array<MessagePostType>
type MessagePostType = {
    message: string
    quantityOfLikes: number
}
type NewPostTextType = string
export type ProfileActionType = ReturnType<typeof addPostCreateActions>
    | ReturnType<typeof onPostChangeCreateAction>
    | ReturnType<typeof setProfile>


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'
const SET_PROFILE = 'SET_PROFILE'

const inintialState = {
    postsData: [
        {message: 'Hi, how are you', quantityOfLikes: 10},
        {message: 'It\'s my first post', quantityOfLikes: 17},
    ],
    newPostText: '',
    profile: null
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
                postsData: [...state.postsData, newPost],
                newPostText: state.newPostText = ''
            }
        case 'UPDATE-NEW-POST-CHANGE':
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
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
export const setProfile = (profile: ContactsDataFriendType) => {
    return {type: SET_PROFILE, profile} as const
}
export const getProfile = (userId: number) => {
    return (dispatch: (action: ProfileActionType) => void) => {
        usersAPI.getUserProfile(userId).then(response => {
                dispatch(setProfile(response.data))
            })
    }
}
export default profileReducer;

