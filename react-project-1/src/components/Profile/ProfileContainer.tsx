import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state:StateType) => {
    return{
        profile: state.profilePage.profile
    }
}
export class ProfileClassContainer extends React.Component<any, any> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if(!userId) userId = 0
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
            this.props.setProfile(response.data)
        })
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}
const profileContainerWithUrlData = withRouter(ProfileClassContainer)
export const ProfileContainer = connect(mapStateToProps,{setProfile})(profileContainerWithUrlData)