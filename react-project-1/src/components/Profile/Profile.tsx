import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {ProfileType} from "../../api/api";



export type PropsType = {
    profile:ProfileType | null
    status:string
    updateProfileStatus:(status:string) => void
}

const Profile = (props:PropsType) => {
    return <div className={s.Profile}>
       <ProfileInfo profile={props.profile}
                    status={props.status}
                    updateProfileStatus={props.updateProfileStatus}
       />
        <MyPostsContainer />
    </div>
}
export default Profile;
