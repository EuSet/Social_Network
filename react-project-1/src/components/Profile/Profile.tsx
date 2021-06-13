import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {ProfileType} from "../../api/api";



export type PropsType = {
    profile:ProfileType | null
    status:string
    updateProfileStatus:(status:string) => void
    savePhoto: (photo: File) => void
    isOwner:boolean
}

const Profile = React.memo((props:PropsType) => {
    return <div className={s.Profile}>
       <ProfileInfo profile={props.profile}
                    status={props.status}
                    updateProfileStatus={props.updateProfileStatus}
                    savePhoto={props.savePhoto}
                    isOwner={props.isOwner}

       />
        <MyPostsContainer />
    </div>
})
export default Profile;
