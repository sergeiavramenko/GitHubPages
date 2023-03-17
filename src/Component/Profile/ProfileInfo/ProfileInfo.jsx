import React from "react";

import pi from './ProfileInfo.module.css';
import Preloader from "../../components/common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile){
        return <div> <Preloader/> </div>
    }
    return (
        <div>

        {/*    <div className={pi.img}>
                <img
                    src="https://images.unsplash.com/photo-1669993427076-3d9acc119413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </div>*/}
            <div className={pi.descriptionBlock}>
                <img  src={props.profile.photos.large}/>
               <li>{props.profile.aboutMe }</li>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>

        </div>

    );
}
export default ProfileInfo;