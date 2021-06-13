import {profileAPI, ProfileType, usersAPI} from "../api/api";
import {FormAction, reset} from "redux-form";

export type ProfilePageType = {
    postsData: PostDataType
    profile: ProfileType | null
    status: string
    initialize: boolean
}
export type PostDataType = Array<MessagePostType>
type MessagePostType = {
    message: string
    quantityOfLikes: number
    id: number
}
export type ProfileActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof setProfileStatus>
    | ReturnType<typeof savePhotoSuccess>


const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const inintialState = {
    postsData: [
        {message: 'Hi, how are you', quantityOfLikes: 10, id: 1},
        {message: 'It\'s my first post', quantityOfLikes: 17, id: 2},
    ],
    profile: null,
    status: '',
    initialize: false
}

const profileReducer = (state: ProfilePageType = inintialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                message: action.newPost,
                quantityOfLikes: 0,
                id: 3
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case "SET_PROFILE_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SAVE_PHOTO_SUCCESS":
            return {...state, profile: {...state.profile!, photos:{...action.photos}}}
        default:
            return state
    }
}

export const addPost = (newPost: string) => {
    return {type: ADD_POST, newPost} as const
}
export const setProfile = (profile: ProfileType) => {
    return {type: SET_PROFILE, profile} as const
}
export const setProfileStatus = (status: string) => {
    return {type: SET_PROFILE_STATUS, status} as const
}
export const savePhotoSuccess = (photos: { small: string, large: string }) => {
    return {type: SAVE_PHOTO_SUCCESS, photos} as const

}
export const savePhoto = (photos: File) => async (dispatch: (action: ProfileActionType) => void) => {
    try {
        const response = await profileAPI.updatePhoto(photos)
        dispatch(savePhotoSuccess(response.data.data.photos))
    } catch (e) {
        throw new Error(e)

    }
}
export const getProfile = (userId: number) => async (dispatch: (action: ProfileActionType) => void) => {
    try {
        const response = await usersAPI.getUserProfile(userId)
        dispatch(setProfile(response))
    } catch (e) {
        throw new Error(e)

    }
}
export const getProfileStatus = (userId: number) => async (dispatch: (action: ProfileActionType) => void) => {
    try {
        const response = await profileAPI.getProfileStatus(userId)
        dispatch(setProfileStatus(response.data))
    } catch (e) {
        throw new Error(e)
    }
}
export const updateProfileStatus = (status: string) => async (dispatch: (action: ProfileActionType) => void) => {
    try {
        const response = await profileAPI.updateProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    } catch (e) {
        throw new Error(e)
    }
}
export const addNewPostThunk = (newPost: string) => {
    return (dispatch: (action: ProfileActionType | FormAction) => void) => {
        dispatch(addPost(newPost))
        dispatch(reset('post'))
    }
}

export default profileReducer;

