import React from 'react'
import {signIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {FormDataType, Login} from "./Login";

type PropsType = {
    signIn:(data:FormDataType) => void
    auth: boolean
}
const mapStateToProps = (state: StateType) => {
    return {
        auth: state.authData.isAuth
    }
}

export class LoginClassContainer extends React.Component<PropsType> {
    render(): React.ReactNode {
        return <Login signIn={this.props.signIn} auth={this.props.auth}/>
    }
}

export const LoginContainer = connect(mapStateToProps,{signIn})(LoginClassContainer)

