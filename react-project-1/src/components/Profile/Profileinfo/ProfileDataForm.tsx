import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../Common/FormControl";
import {ProfileType} from "../../../api/api";

export type ProfileFormDataType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileFormDataType> & ProfileFormDataType> = (props) => {
    let contact;
    if(props.profile){
        const profileData = Object.keys(props.profile.contacts) as Array<keyof typeof props.profile.contacts>
        contact = profileData.map(key => {
            return <div key={key}>
                <Field placeholder={key} name={'contacts.' + key} component={Input} />
            </div>
        })
    }
    return <form onSubmit={props.handleSubmit}>
        <div>
            {props.error && <div style={{color:'red', fontSize:20}}>{props.error}</div>}
        </div>
        <div>
            <button>save</button>
        </div>
        <div>
            <b>About me</b>: <Field component={Input} name={'aboutMe'} placeholder={'aboutMe'}/>
        </div>
        <div>
            <b>Looking for a job</b>: <Field component={Input} type={'checkbox'} name={'lookingForAJob'}/>
        </div>
        <div>
            <Field component='textarea' name={'lookingForAJobDescription'}
                   placeholder={'Looking for a job description'}/>
        </div>
        <div>
            <b>Contacts</b>:
        </div>
        <div style={{paddingLeft:30}}>
            {contact}
        </div>
    </form>
}
export const ProfileDataReduxForm = reduxForm<ProfileType, ProfileFormDataType>({form: 'profileData'})(ProfileDataForm)
