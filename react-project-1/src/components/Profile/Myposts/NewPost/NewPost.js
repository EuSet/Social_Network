import React from 'react';
import s from './NewPost.module.css';

const NewPost = (props) => {
    let createNewPost = React.createRef()
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let addNewPost = createNewPost.current.value
        props.updateNewPostChange(addNewPost)

    }
    return <div className={s.newPost}>
        <textarea onChange={onPostChange} ref={createNewPost} value={props.newPostText}/>
        <button onClick={addPost}>add post</button>
    </div>

}
export default NewPost;