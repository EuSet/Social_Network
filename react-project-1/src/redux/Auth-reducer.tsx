export type AuthType = {
    id:number | null
    email:string | null
    login:string | null
    isAuth:boolean
}
const SET_AUTH_DATA = 'SET_AUTH_DATA'
export type ActionType = ReturnType<typeof setAuthData>
const initialState: AuthType = {
    id: null,
    login:null,
    email: null,
    isAuth:false
}

const authReducer = (state: AuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth:true,
             }
        default:
            return state
    }
}
export const setAuthData = (data: AuthType) => {
    return {type: SET_AUTH_DATA, data} as const
}

export default authReducer;