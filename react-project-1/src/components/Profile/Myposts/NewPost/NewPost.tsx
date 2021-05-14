import React from 'react';
import s from './NewPost.module.css';
import {NewPostFormDataType, NewPostReduxForm} from "./NewPostForm";

export type PropsType = {
    addNewPostThunk:(newPost:string) => void
}


const NewPost = (props:PropsType) => {

    let addPost = (formData:NewPostFormDataType) => {
        props.addNewPostThunk(formData.post)
    }

    return <div className={s.newPost}>
        <NewPostReduxForm onSubmit={addPost}/>
    </div>

}
export default NewPost;
