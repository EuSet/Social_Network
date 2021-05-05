import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state:StateType) => {
    return{
        profile: state.profilePage.profile,
    }
}
class ProfileClassContainer extends React.Component<any, any> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if(!userId) userId = 16444
        this.props.getProfile(userId)
        //     usersAPI.getUserProfile(userId)
        //     .then(response => {
        //     this.props.setProfile(response.data)
        // })
    }
    render() {
        // if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile} />
    }
}
// const authRedirectComponent = withAuthRedirect(ProfileClassContainer)
// const profileContainerWithUrlData = withRouter(authRedirectComponent)
// export const ProfileContainer = connect(mapStateToProps,{getProfile})(profileContainerWithUrlData)

export default compose<React.ComponentType>(
    connect(mapStateToProps,{getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileClassContainer)