import React from 'react';
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import {ProfilePageType} from "../../../redux/State";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action:any) => void
}

const MyPosts = (props:PropsType) => {
    let postsElements = props.profilePage.postsData.map(p => <Posts message={p.message} quantityOfLikes={p.quantityOfLikes}/>);
    return <div className={s.myPosts}>
        myposts
        <NewPost newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}

        />
        {postsElements}
    </div>
}
export default MyPosts;