import React from 'react';
import s from './NewPost.module.css';

let createNewPost = React.createRef()
let addPost = () => {
    let addNewPost = createNewPost.current.value
    alert(addNewPost)
}

const NewPost = () => {
    return <div className={s.newPost}>
        <textarea ref={createNewPost}/>
           <button onClick={addPost}>add post</button>
        </div>

}
export default NewPost;