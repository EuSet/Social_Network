import s from './ProfileInfo.module.css';
import profileCover from './../../../img/profile-cover.jpg'
import React from "react";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../../../api/api";

export type PropsType = {
    profile:ProfileType | null
    status:string
    updateProfileStatus:(status:string) => void
}
const ProfileInfo = (props:PropsType) => {
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
            <img src={props.profile?.photos.large} alt={'#'}/>
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
