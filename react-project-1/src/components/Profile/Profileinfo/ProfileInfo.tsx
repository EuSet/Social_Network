import s from './ProfileInfo.module.css';
import profileCover from './../../../img/profile-cover.jpg'
import {profileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

export type PropsType = {
    profile:profileType | null
}
const ProfileInfo = (props:PropsType) => {
     return  <div>
        <div className={s.backgroundimg}>
            <img src={profileCover} alt={'#'}/>
        </div>
         <div>
             {props.profile?.fullName}
         </div>
         <ProfileStatus/>
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