import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getProfile, getProfileStatus, savePhoto, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../api/api";

type PropsType = {
    match: { params: { userId: number } }
    getProfile: (userId: number) => void
    getProfileStatus: (userId: number) => void
    updateProfileStatus: (status: string) => void
    profile: ProfileType
    status: string
    authorizedId: number
    history: any
    savePhoto: (photo: File) => void
}

const mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedId: state.authData.id,
        initialize: state.profilePage.initialize

    }
}


class ProfileClassContainer extends React.Component<PropsType, StateType> {
    refreshProfile(){
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.authorizedId
        if (!userId) this.props.history.push('login')
        if (userId){
            this.props.getProfile(userId)
            this.props.getProfileStatus(userId)
        }
    }
    componentDidMount(): void {
        this.refreshProfile()

    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>, snapshot?: any): void {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }

    }

    render() {
        // if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status}
                        updateProfileStatus={this.props.updateProfileStatus}
                        savePhoto={this.props.savePhoto}
                        isOwner={!this.props.match.params.userId}
        />
    }
}

// const authRedirectComponent = withAuthRedirect(ProfileClassContainer)
// const profileContainerWithUrlData = withRouter(authRedirectComponent)
// export const ProfileContainer = connect(mapStateToProps,{getProfile})(profileContainerWithUrlData)

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileClassContainer)
