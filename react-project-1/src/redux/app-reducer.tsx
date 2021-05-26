import {AuthActionType, authMe} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type ActionType = ReturnType<typeof initializedSuccess>
const initState = {
    initialized: false
}
type StateType = {
    initialized: boolean
}

export const appReducer = (state: StateType = initState, action: ActionType) => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

export const initializedSuccess = () => {
    return {type:INITIALIZED_SUCCESS} as const
}

export const initializeApp = () => {
    return (dispatch: ThunkDispatch<StateType, unknown, AuthActionType | ActionType>) => {
        const promise = dispatch(authMe())
        Promise.all([promise]).then(() => {
            console.log(promise)
            dispatch(initializedSuccess())
        })
    }
}
