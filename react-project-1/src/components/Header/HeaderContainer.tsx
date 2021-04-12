import React from 'react'
import Header from "./Header";
import axios from "axios";
import {setAuthData} from "../../redux/Auth-reducer";
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0){
                this.props.setAuthData(response.data.data)
            }
        })
    }
    render(): React.ReactNode {
        return <Header
            {...this.props}
        />
    }
}

export const HeaderContainer = connect(mapStateToProps,{setAuthData})(HeaderClassContainer)
