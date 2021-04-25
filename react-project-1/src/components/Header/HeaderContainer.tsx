import React from 'react'
import Header from "./Header";
import {authMe} from "../../redux/Auth-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        login: state.authData.login,
        isAuth: state.authData.isAuth
    }
}

export class HeaderClassContainer extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.authMe()
        // authAPI.authInSocNetwork().then(response => {
        //     if(response.data.resultCode === 0){
        //         this.props.setAuthData(response.data.data)
        //     }
        // })
    }
    render(): React.ReactNode {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            {...this.props}
        />
    }
}

export const HeaderContainer = connect(mapStateToProps,{authMe})(HeaderClassContainer)
