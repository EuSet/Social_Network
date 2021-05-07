import React from 'react'
import {signIn} from "../../redux/Auth-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {FormDataType, Login} from "./Login";

type PropsType = {
    signIn:(data:FormDataType) => void
}
const mapStateToProps = (state: StateType) => {
    return {
    }
}

export class LoginClassContainer extends React.Component<PropsType, any> {
    render(): React.ReactNode {
        return <Login signIn={this.props.signIn}/>
    }
}

export const LoginContainer = connect(mapStateToProps,{signIn})(LoginClassContainer)