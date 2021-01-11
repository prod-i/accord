import React from 'react';
import './Profile.css';
import Info from './Info/Info';
import Avatar from './Avatar/Avatar';
import Posts from './Posts/Posts';
import Preloader from '../common/Preloader/Preloader';

const Profile = (props) => {
    return (
        <div className="Profile">
            <div className="container">
                <div className="profile__user">
                    {!props.profile.profile ? <Preloader />
                        : <>
            
                            <Avatar profile={props.profile.profile} isOwner={props.isOwner} savePhoto={props.savePhoto}/>

                            <div className="profile__inner">

                                <Info
                                    profile={props.profile.profile}
                                    status={props.status}
                                    updateStatus={props.updateStatus}
                                    isOwner={props.isOwner}
                                    saveProfile={props.saveProfile}
                                />
                                <Posts
                                    posts={props.profile}
                                    addPost={props.addPost}
                                />

                            </div>

                        </>}
                </div>
            </div>
        </div>
    );
};

export default Profile;