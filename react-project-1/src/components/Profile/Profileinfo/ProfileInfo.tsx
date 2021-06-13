import s from './ProfileInfo.module.css';
import profileCover from './../../../img/profile-cover.jpg'
import React from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../../../api/api";
import ContactsAvatar from "../../../img/icons8-профиль-кошки-96.png";

export type PropsType = {
    profile:ProfileType | null
    status:string
    updateProfileStatus:(status:string) => void
    savePhoto: (photo: File) => void
    isOwner:boolean
}
const ProfileInfo = (props:PropsType) => {
    console.log('profileinfo')
    const savePhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files!.length){
            props.savePhoto(e.target.files![0])
        }
    }
     return  <div>
        <div className={s.backgroundimg}>
            <img src={profileCover} alt={'#'}/>
        </div>
         <div>
             {props.profile?.fullName}
         </div>
         <ProfileStatusWithHooks status={props.status}
                                 updateProfileStatus={props.updateProfileStatus}
         />
        <div className={s.ava}>
            <img className={s.mainAvatar} src={props.profile ? props.profile.photos.large || ContactsAvatar : ContactsAvatar} alt={'#'}/>
            {props.isOwner && <input type={'file'} onChange={savePhotoHandler}/>}
        </div>
         <div>
             {props.profile?.aboutMe}
         </div>
         <div>
             {props.profile?.lookingForAJobDescription}
         </div>
         <hr/>
    </div>
}

export default ProfileInfo;
