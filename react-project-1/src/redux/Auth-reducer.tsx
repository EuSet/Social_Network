import {authAPI} from "../api/api";
import {FormDataType} from "../components/Login/Login";

export type AuthType = {
    id:number | null
    email:string | null
    login:string | null
    isAuth:boolean
}
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SIGN_IN = 'SIGN_IN'
export type ActionType = ReturnType<typeof setAuthData> | ReturnType<typeof signInSocNetwork>
const initialState: AuthType = {
    id: null,
    login:null,
    email: null,
    isAuth:false
}

const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true,
             }
        case "SIGN_IN":
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}
export const setAuthData = (data: AuthType) => {
    return {type: SET_AUTH_DATA, data} as const
}
export const signInSocNetwork = (data: AuthType) => {
    return {type:SIGN_IN, data} as const
}
export const authMe = () => {
    return (dispatch:(action:ActionType) => void) => {
        authAPI.authInSocNetwork().then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthData(response.data.data))
            }
        })
    }
}
export const signIn = (data:FormDataType) => {
    return (dispatch:(action:ActionType) => void) => {
        authAPI.signInSocialNetwork(data).then(response => {
            if(response.data.resultCode === 0){
                dispatch(signInSocNetwork(response.data))
            }
        })
    }
}
export default authReducer;