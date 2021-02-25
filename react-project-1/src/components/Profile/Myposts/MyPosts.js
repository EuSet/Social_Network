import React from 'react';
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
    let postsElements = props.state.map(p => <Posts message={p.message} quantityOfLikes={p.quantityOfLikes}/>);
    return <div className={s.myPosts}>
        myposts
        <NewPost/>
        {postsElements}
    </div>
}
export default MyPosts;