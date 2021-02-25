import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import Posts from "./Myposts/Posts/Posts";
const Profile = (props) => {
    return <div className={s.Profile}>
       <ProfileInfo/>
        <MyPosts state={props.state.postsData} />
    </div>
}
export default Profile;