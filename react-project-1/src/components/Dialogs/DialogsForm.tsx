import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type DialogsFormDataType = {
    message:string
}

export const DialogsForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'message'} placeholder={'message'}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}

export const DialogsReduxForm = reduxForm<DialogsFormDataType>( {form:'message'} )(DialogsForm)

