import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


const mapStateToProps = (state:StateType) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}
class ProfileClassContainer extends React.Component<any, any> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if(!userId) userId = 16444
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)


        //     usersAPI.getUserProfile(userId)
        //     .then(response => {
        //     this.props.setProfile(response.data)
        // })
    }
    render() {
        // if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status} updateProfileStatus={this.props.updateProfileStatus} />
    }
}
// const authRedirectComponent = withAuthRedirect(ProfileClassContainer)
// const profileContainerWithUrlData = withRouter(authRedirectComponent)
// export const ProfileContainer = connect(mapStateToProps,{getProfile})(profileContainerWithUrlData)

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileClassContainer)