import React from 'react';
import s from './ProfileInfo.module.css';
import profileCover from './../../../img/profile-cover.jpg'


const ProfileInfo = () => {
    return <div>
        <div className={s.backgroundimg}>
            <img src={profileCover} alt={'#'}/>
        </div>
        <div className={s.ava}>
            avatar
        </div>
    </div>
}
export default ProfileInfo;