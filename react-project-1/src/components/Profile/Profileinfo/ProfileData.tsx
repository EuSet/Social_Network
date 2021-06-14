import React from "react";
import {ProfileType} from "../../../api/api";

type ProfileDataPropsType = {
    profile:ProfileType
    isOwner:boolean
    setEditMode:(value:boolean) => void
}
export const ProfileData:React.FC<ProfileDataPropsType> = ({profile, isOwner, setEditMode}) => {
    let contact;
    if(profile){
        const profileData = Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>
        contact = profileData.map(key => {
            return <div key={key}>
                {key}: {profile.contacts[key]}
            </div>
        })
    }
    return <>
        <div>
            {profile?.fullName}
        </div>
        {
            isOwner && <div>
                <button onClick={() => setEditMode(false)}>edit</button>
            </div>
        }
        <div>
            <b>About me</b>: <span>{profile?.aboutMe}</span>
        </div>
        <div>
            <b>Looking for a job</b>: {profile?.lookingForAJob}
        </div>
        <div>
            <b>Looking for a job description</b>:  {profile?.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts</b>:
        </div>
        <div style={{paddingLeft:30}}>
            {contact}
        </div>
    </>
}
