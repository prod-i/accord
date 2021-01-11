import React, { useState, useEffect } from 'react';
import './Info.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Preloader from '../../common/Preloader/Preloader';
import ProfileDataForm from './ProfileDataForm';

const Info = ({ profile, status, updateStatus, isOwner, saveProfile }) => {

    const [editMode, setEditMode] = useState(false);
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <div className="profile__info wrapper">
            {!profile
                ? <Preloader />
                : <>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus} runToEditMode={() => { setEditMode(true) }} />
                    }
                </>
            }
        </div>
    );
};

const ProfileData = ({ profile, isOwner, runToEditMode, status, updateStatus }) => {
    const [showMode, setShowMode] = useState(false);

    return (
        <div className='profile__info'>
            <div className="profile__name_info_wrapper">
                <div className="profile__name_wrapper">
                    <h1 className="profile__name">{profile.fullName}</h1>
                    <p className="online">● online</p>
                </div>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>

    
            <div className="profile_detailInfo">
                <div className="profile__info_item">Relationship: <span className='info_relationship'> {profile.lookingForAJob ? 'yes' : 'no'} </span></div>
                {showMode ? <div className="profile__info_i">{Object.keys(profile.contacts).map(key => <Contact className='profile__info_items' key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}</div>
                    : <></>
                }
            </div>

            <div className="profile__info_optionsMode">
                {showMode ? <span className='showInfo' onClick={() => { setShowMode(false) }}>hidden info</span>
                          : <span className='showInfo' onClick={() => { setShowMode(true) }}>show Info</span>}
                {isOwner && <span className='editInfo' onClick={runToEditMode}>EDIT</span>}
            </div>

        </div>
    );
}
const Contact = ({ contactTitle, contactValue }) => {
    return <div className="profile__info_item"><div className="profile__info_descr">{contactTitle}</div> <div className="profile__info_items info_input">{contactValue}</div></div>
}

export default Info;