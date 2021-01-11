import React from 'react';
import Profile from './Profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { setUserProfile, getProfileTC, getStatusTC, updateStatusTC, addPost, savePhoto, saveProfile } from '../../redux/profileReducer';
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer extends React.Component {
    refrashProfile(){
        let usersId = this.props.match.params.userId;
        if (!usersId) {
            usersId = this.props.authorizedUserId;
            if(!usersId){
                this.props.history.push('/login');
            }
        }
        this.props.getProfileTC(usersId);
        this.props.getStatusTC(usersId);
    }
    componentDidMount() {
        this.refrashProfile();
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.userId != prevProps.match.params.userId)
        this.refrashProfile();
    }
    render() {
        return (
            // !this.props.isAuth ? <Redirect to='/login' /> : 
            
            <Profile {...this.props}
                isOwner      ={!this.props.match.params.userId}
                profile      ={this.props.profile}
                posts        ={this.props.posts}
                status       ={this.props.status}
                updateStatus ={this.props.updateStatusTC}
                addPost      ={this.props.addPost}
                saveProfile  ={this.props.saveProfile}
                savePhoto    ={this.props.savePhoto}
            />
            
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose
    (
        connect(mapStateToProps, { setUserProfile, getProfileTC, getStatusTC, updateStatusTC, addPost, savePhoto, saveProfile}),
        withRouter,
    )(ProfileContainer);