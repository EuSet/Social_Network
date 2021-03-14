import React from 'react';
import s from './NewPost.module.css';
import {addPostCreateActions, onPostChangeCreateAction} from "../../../../redux/State";

type PropsType = {
    newPostText:string
    dispatch: (action:any) => void
}


const NewPost = (props:PropsType) => {
    let createNewPost:any = React.createRef()
    let addPost = () => {
        props.dispatch(addPostCreateActions())
    }
    let onPostChange = () => {
        let addNewPost = createNewPost.current.value
        props.dispatch(onPostChangeCreateAction(addNewPost))

    }
    return <div className={s.newPost}>
        <textarea onChange={onPostChange} ref={createNewPost} value={props.newPostText}/>
        <button onClick={addPost}>add post</button>
    </div>

}
export default NewPost;