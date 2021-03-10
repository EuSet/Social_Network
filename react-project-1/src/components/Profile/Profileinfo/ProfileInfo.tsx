import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div className={s.backgroundimg}>
            <img src='http://demo.foxthemes.net/socialitev2.0/assets/images/avatars/profile-cover.jpg'/>
        </div>
        <div className={s.ava}>
            avatar
        </div>
    </div>
}
export default ProfileInfo;