import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css';

type PropsType = {
    newPostText:string
    addPost:() => void
    onPostChange:(addNewPost:string) => void
}


const NewPost = (props:PropsType) => {

    let addPost = () => {
        props.addPost()
    }
    let createNewPost = props.newPostText
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        createNewPost = e.currentTarget.value
        props.onPostChange(createNewPost)

    }
    return <div className={s.newPost}>
        <textarea onChange={onPostChange} value={createNewPost}/>
        <button onClick={addPost}>add post</button>
    </div>

}
export default NewPost;