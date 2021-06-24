import {authAPI, securityApi} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {ThunkDispatch} from "redux-thunk";
import {AppThunk, StateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: null | string
}
const SET_AUTH_DATA = 'auth/SET_AUTH_DATA'
const SIGN_IN = 'auth/SIGN_IN'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'
export type AuthActionType = ReturnType<typeof setAuthData> | ReturnType<typeof signInSocNetwork>
| ReturnType<typeof setCaptchaUrl>
export const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: AuthType = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case "auth/SET_AUTH_DATA":
            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
                isAuth: action.payload.isAuth
            }
        case "auth/SIGN_IN":
            return {
                ...state,
                id: action.data,
                isAuth: true
            }
        case "auth/SET_CAPTCHA_URL":
            return {
                ...state,
                captchaUrl:action.captchaUrl
            }
        default:
            return state
    }
}
export const setAuthData = (email: string | null, id: number | null, login: string | null, isAuth: boolean) => {
    return {type: SET_AUTH_DATA, payload: {email, id, login, isAuth}} as const
}
export const signInSocNetwork = (data: number | null) => {
    return {type: SIGN_IN, data} as const
}
export const setCaptchaUrl = (captchaUrl: string | null) => {
    return {type: SET_CAPTCHA_URL, captchaUrl} as const
}
export const authMe = () => (dispatch: (action: AuthActionType) => void) => {
    return authAPI.authInSocNetwork()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(
                    response.data.data.email,
                    response.data.data.id,
                    response.data.data.login,
                    true))
            }
        })
}

export const signIn = (data: FormDataType) => {
    return (dispatch: ThunkDispatch<StateType, unknown, AuthActionType | FormAction>) => {
        authAPI.signInSocialNetwork(data).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(signInSocNetwork(response.data.data.userId))
                dispatch(authMe())
            } else {
                if(response.data.resultCode === 10){
                    dispatch(getCaptchaThunk())
                }
                let message = response.data.messages.length > 0 ? response.data.messages![0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}
export const getCaptchaThunk = (): AppThunk => async (dispatch) => {
    try {
        const res = await securityApi.getCaptcha()
        dispatch(setCaptchaUrl(res.data.url))
    } catch (e) {
        throw new Error(e)
    }
}
export const signOut = () => {
    return (dispatch: (action: AuthActionType) => void) => {
        authAPI.signOut().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false))
            }
        })
    }
}
export default authReducer;
