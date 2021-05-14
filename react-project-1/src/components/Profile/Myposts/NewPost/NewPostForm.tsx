import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type NewPostFormDataType = {
    post:string
}

export const NewPostForm: React.FC<InjectedFormProps<NewPostFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'post'} placeholder={'post'}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}

export const NewPostReduxForm = reduxForm<NewPostFormDataType>( {form:'post'} )(NewPostForm)
