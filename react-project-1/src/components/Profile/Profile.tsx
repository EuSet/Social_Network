import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ProfilePageType} from "../../redux/State";

type PropsType = {
    profilePage:ProfilePageType
    dispatch: (action:any) => void
}

const Profile = (props:PropsType) => {
    return <div className={s.Profile}>
       <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 dispatch={props.dispatch}
        />
    </div>
}
export default Profile;