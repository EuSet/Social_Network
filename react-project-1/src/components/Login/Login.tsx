import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../Common/Validate";
import {Input} from "../Common/FormControl";
import { Redirect } from "react-router-dom";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required]} component={Input} name={'login'} placeholder={'email'}/>
        </div>
        <div>
            <Field validate={[required]} component={Input} type={'password'} name={'password'} placeholder={'password'}/>
        </div>
        <div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/>Remember me</div>
        <div>
            {props.error && <div style={{color:'red', fontSize:20}}>{props.error}</div>}
            <button>login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
type PropsType = {
    signIn:(data:FormDataType) => void
    auth: boolean
}
export const Login = (props:PropsType) => {
    const onSubmit = (formData:FormDataType) => {
        props.signIn(formData)
    }
    if (props.auth) return <Redirect to={'/profile'}/>
    return <div>
        <h3>LOGIN</h3>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
