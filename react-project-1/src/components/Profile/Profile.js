import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";

const Profile = () => {
    return <div className={s.Profile}>
        <div className={s.backgroundimg}>
        </div>
        <div className={s.ava}>
            avatar
        </div>
        <MyPosts/>

    </div>
}
export default Profile;