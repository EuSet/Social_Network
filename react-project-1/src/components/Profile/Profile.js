import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import Posts from "./Myposts/Posts/Posts";
import {addPost} from "../../redux/State";
const Profile = (props) => {
    return <div className={s.Profile}>
       <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 addPost={props.addPost}
                 updateNewPostChange={props.updateNewPostChange}
        />
    </div>
}
export default Profile;