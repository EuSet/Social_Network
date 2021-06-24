import React from 'react'
import {signIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {FormDataType, Login} from "./Login";

type PropsType = {
    signIn:(data:FormDataType) => void
    auth: boolean
    captchaUrl:null | string
}
const mapStateToProps = (state: StateType) => {
    return {
        auth: state.authData.isAuth,
        captchaUrl: state.authData.captchaUrl
    }
}

export class LoginClassContainer extends React.Component<PropsType> {
    render(): React.ReactNode {
        return <Login signIn={this.props.signIn}
                      auth={this.props.auth}
                      captchaUrl={this.props.captchaUrl}
        />
    }
}

export const LoginContainer = connect(mapStateToProps,{signIn})(LoginClassContainer)

