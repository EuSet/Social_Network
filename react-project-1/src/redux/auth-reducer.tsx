import {authAPI} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type AuthType = {
    id:number | null
    email:string | null
    login:string | null
    isAuth:boolean
}
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SIGN_IN = 'SIGN_IN'
export type ActionType = ReturnType<typeof setAuthData> | ReturnType<typeof signInSocNetwork>
export const initialState: AuthType = {
    id: null,
    login:null,
    email: null,
    isAuth:false
}

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
                isAuth: action.payload.isAuth
             }
        case "SIGN_IN":
            return {
                ...state,
                id: action.data,
                isAuth:true
            }
        default:
            return state
    }
}
export const setAuthData = (email:string | null, id:number | null, login:string | null, isAuth:boolean) => {
    return {type: SET_AUTH_DATA, payload:{email, id, login, isAuth}} as const
}
export const signInSocNetwork = (data: number | null) => {
    return {type:SIGN_IN, data} as const
}
export const authMe = () => {
    return (dispatch:(action:ActionType) => void) => {
        authAPI.authInSocNetwork().then(response => {
            if(response.data.resultCode === 0){

                dispatch(setAuthData(
                    response.data.data.email,
                    response.data.data.id,
                    response.data.data.login,
                     true))
            }
        })
    }
}
export const signIn = (data:FormDataType) => {
    return (dispatch: ThunkDispatch<StateType, unknown, ActionType | FormAction>) => {
        authAPI.signInSocialNetwork(data).then(response => {
            if(response.data.resultCode === 0){
                dispatch(signInSocNetwork(response.data.data.userId))
                dispatch(authMe())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages![0] : 'some error'
                dispatch(stopSubmit('login',{_error:message}))
            }
        })
    }
}
export const signOut = () => {
    return (dispatch:(action:ActionType) => void) => {
        authAPI.signOut().then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthData(null, null, null, false))
            }
        })
    }
}
export default authReducer;
