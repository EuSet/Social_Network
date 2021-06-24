import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../Common/Validate";
import {Input} from "../Common/FormControl";
import { Redirect } from "react-router-dom";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export const LoginForm: React.FC<FormPropsType & InjectedFormProps<FormDataType, FormPropsType, string>> = (props) => {
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
        {props.captchaUrl && <div>
        <div>
            <img src={props.captchaUrl}/>
        </div>
            <div>
            <Field component={'input'} validate={[required]} placeholder={'symbols from image'} name={'captcha'}/>
        </div>
        </div>}
    </form>
}

export const LoginReduxForm = reduxForm<FormDataType, FormPropsType>({form: 'login'})(LoginForm)
type PropsType = {
    signIn:(data:FormDataType) => void
    auth: boolean
    captchaUrl:null | string
}
type FormPropsType = {
    captchaUrl: null | string
}
export const Login = (props:PropsType) => {
    const onSubmit = (formData:FormDataType) => {
        props.signIn(formData)
    }
    if (props.auth) return <Redirect to={'/profile'}/>
    return <div>
        <h3>LOGIN</h3>
        <LoginReduxForm captchaUrl={props.captchaUrl}  onSubmit={onSubmit} />
    </div>
}
