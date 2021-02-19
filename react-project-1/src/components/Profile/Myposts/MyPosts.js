import React from 'react';
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return   <div className={s.myPosts}>
        myposts
        <NewPost/>
        <Posts message='Hi, how are you' quantityOfLikes='10'/>
        <Posts message="It's my first post" quantityOfLikes='17'/>
    </div>
}
export default MyPosts;