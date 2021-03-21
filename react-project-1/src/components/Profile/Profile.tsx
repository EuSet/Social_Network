import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = () => {
    return <div className={s.Profile}>
       <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}
export default Profile;