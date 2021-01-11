import React from 'react';
import './Avatar.css';
import userAvatar from '../../../assets/users_avatar/users-avatar.svg';
import Preloader from '../../common/Preloader/Preloader';



const Avatar = (props) => {
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className="profile__avatar wrapper">
            {!props.profile ? <Preloader />
                : <>
                    <div className="profile_avatar_img_wrap"><img src={!props.profile.photos.large ? userAvatar : props.profile.photos.large} className="profile__avatar_img" alt="avatar" /></div>
                    {props.isOwner 
                    ? <>
                        <input type='file' id='input__file' className="profile__photo" onChange={onMainPhotoSelected}/>
                        <label htmlFor="input__file" className="profile__edit">
                            <span>update photo</span>
                        </label>
                     </>
                    : 
                        <label htmlFor="input__file" className="profile__edit">
                            <span>follow</span>
                        </label>
                    }
                </>}
        </div>
    );
};

export default Avatar;