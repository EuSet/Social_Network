import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ProfilePageType} from "../../redux/State";

type PropsType = {
    profilePage:ProfilePageType
    addPost:() => void
    updateNewPostChange:(newText: string) => void
}

const Profile = (props:PropsType) => {
    return <div className={s.Profile}>
       <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 addPost={props.addPost}
                 updateNewPostChange={props.updateNewPostChange}
        />
    </div>
}
export default Profile;