import React from 'react'
import Header from "./Header";
import {signOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";


type PropsType = {
    signOut:() => void
    isAuth:boolean
    login:string | null
}

const mapStateToProps = (state: StateType) => {
    return {
        login: state.authData.login,
        isAuth: state.authData.isAuth
    }
}

export class HeaderClassContainer extends React.Component<PropsType> {
    // componentDidMount(): void {
    //     this.props.authMe()
    // }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            signOut={this.props.signOut}

        />
    }
}

export const HeaderContainer = connect(mapStateToProps,{signOut})(HeaderClassContainer)
