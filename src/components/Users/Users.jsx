import React from 'react';
import './Users.css';
import userAvatar from '../../assets/users_avatar/users-avatar.svg';
import { NavLink } from 'react-router-dom';

const Users = ({usersData, unfollowTC, followTC, followingProgres}) => {
    return (<>
        {
            usersData.map(item => <div key={item.id} className="users__item">
                <div className="users__item_wrapper">
                    <div className="users__avatar">
                        <NavLink to={'/profile/' + item.id}>
                            <img src={item.photos.large != null ? item.photos.large : userAvatar} alt="" className="users__avatar avatar" />
                        </NavLink>
                    </div>
                    <div className="users__info">
                        <NavLink to={'/profile/' + item.id}>
                            <span className="users__info_name">{item.name}</span>
                        </NavLink>
                        <span className="users__info_status">{item.status}</span>
                        <div className="users__newMessage">New message</div>
                    </div>
                </div>
                <div className="users__options">
                    <div className="users__settings">●●●</div>
                    <div className="users_button">
                        {item.followed
                            ? <button disabled={followingProgres.some(id => id === item.id)} className="users__follow" onClick={() => {
                                unfollowTC(item.id);
                            }}>unfollow</button>
                            : <button disabled={followingProgres.some(id => id === item.id)} className="users__follow" onClick={() => {
                                followTC(item.id);
                            }}>follow</button>
                        }
                    </div>
                </div>
                </div>)
        }
    </>
    );
}

export default Users;