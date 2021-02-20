import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = () => {
    return <div className={s.Profile}>
       <ProfileInfo/>
        <MyPosts/>
    </div>
}
export default Profile;