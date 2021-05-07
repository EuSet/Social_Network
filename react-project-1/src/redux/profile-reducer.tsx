import {profileAPI, usersAPI} from "../api/api";

export type ProfilePageType = {
    postsData: PostDataType
    newPostText: NewPostTextType
    profile: profileType | null
    status:string
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
    id:number
}
type NewPostTextType = string
export type ProfileActionType = ReturnType<typeof addPostCreateActions>
    | ReturnType<typeof onPostChangeCreateAction>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof setProfileStatus>


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

const inintialState = {
    postsData: [
        {message: 'Hi, how are you', quantityOfLikes: 10, id:1},
        {message: 'It\'s my first post', quantityOfLikes: 17, id: 2},
    ],
    newPostText: '',
    profile: null,
    status:''
}

const profileReducer = (state: ProfilePageType = inintialState, action: ProfileActionType):ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                message: state.newPostText,
                quantityOfLikes: 0,
                id:3
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
        case "SET_PROFILE_STATUS":
            return {
                ...state,
                status:action.status
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
export const setProfile = (profile: profileType) => {
    return {type: SET_PROFILE, profile} as const
}
export const setProfileStatus = (status:string) => {
    return {type: SET_PROFILE_STATUS, status} as const
}

export const getProfile = (userId: number) => {
    return (dispatch: (action: ProfileActionType) => void) => {
        usersAPI.getUserProfile(userId).then(response => {
                dispatch(setProfile(response.data))
            })
    }
}
export const getProfileStatus = (userId: number) => {
    return (dispatch: (action: ProfileActionType) => void) => {
        profileAPI.getProfileStatus(userId).then(response => {
            dispatch(setProfileStatus(response.data))
        })
    }
}
export const updateProfileStatus = (status:string) => {
    return (dispatch: (action: ProfileActionType) => void) => {
        profileAPI.updateProfileStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setProfileStatus(status))
            }
        })
    }
}

export default profileReducer;

