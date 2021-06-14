import s from './ProfileInfo.module.css';
import profileCover from './../../../img/profile-cover.jpg'
import React, {useState} from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../../../api/api";
import ContactsAvatar from "../../../img/icons8-профиль-кошки-96.png";
import {ProfileDataReduxForm} from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";

export type PropsType = {
    profile:ProfileType | null
    status:string
    updateProfileStatus:(status:string) => void
    savePhoto: (photo: File) => void
    isOwner:boolean
    saveProfileData:(formData:ProfileType) => Promise<any>
}
const ProfileInfo = (props:PropsType) => {
    const [editMode, setEditMode] = useState(true)
    const savePhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files!.length){
            props.savePhoto(e.target.files![0])
        }
    }
    const onSubmit = (formData: any) => {
        props.saveProfileData(formData).then(() => {
                setEditMode(true)
        })

    }
     return  <div>
        <div className={s.backgroundimg}>
            <img src={profileCover} alt={'#'}/>
        </div>
        <div className={s.ava}>
            <img className={s.mainAvatar} src={props.profile?.photos.large || ContactsAvatar} alt={'#'}/>
            {props.isOwner && <input type={'file'} onChange={savePhotoHandler}/>}
        </div>
         <ProfileStatusWithHooks status={props.status}
                                 updateProfileStatus={props.updateProfileStatus}
         />{
         editMode ? <ProfileData setEditMode={setEditMode} profile={props.profile!} isOwner={props.isOwner}/> :
         <ProfileDataReduxForm initialValues={props.profile!} onSubmit={onSubmit} profile={props.profile!} /> }
         <hr/>
    </div>
}

export default ProfileInfo;
