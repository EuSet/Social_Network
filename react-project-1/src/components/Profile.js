import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return   <div className={s.Profile}>
        <div className={s.backgroundimg}>
        </div>
        <div className={s.ava}>
            avatar
        </div>
        <div className={s.myPosts}>
            myposts
        </div>
        <div className={s.newPosts}>
            new post
        </div>
        <div className={s.Post1}>
            post1
        </div>
    </div>
}
export default Profile;