import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="profile_posts wrapper item">
            <div className="profile__headerPost">
                <div className="profile__headerPost_wrapper">
                    <div className="profile__postAvatar">
                        <img src="https://sun9-49.userapi.com/c845122/v845122315/18e5e0/iAoBtrsGeFo.jpg" alt="" className="profile__postAvatar avatar"/>
                    </div>
                    <div>
                        <h2 className="profile__namePost">{props.name}</h2>
                        <p className="profile__post_time">1 minute ago</p>
                    </div>
                </div>
                <div className="profile__settingsPost">●●●</div>
            </div>
            <div className="profile__postBody">
                    {props.content}
                    {/* /CONTENT */}
            </div>
            <div className="profile_postFoother">
    <div className="profile__postFeedback like"><i className="fa fa-heart" aria-hidden="true"></i> {props.like}</div>
    <div className="profile__postFeedback comment"><i className="fa fa-comment" aria-hidden="true"></i> {props.comment}</div>
            </div>
        </div>
    );
};


export default Post;






