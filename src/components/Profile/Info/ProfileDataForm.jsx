import React from 'react';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form className='profile__info' onSubmit={handleSubmit}>
            <div className="profile__name_wrapper">
                <div className="profile__info_descr info_checkbox"><h1 className="profile__name">{createField('Full name', 'fullName', [], Input)}</h1></div>
                <p className="online">● online</p>
            </div>
            <div className='warn formError'>
                {error}
            </div>
                                            <div className="profile__info_list">
                                                            <div className="profile__info_item">
                                                                <div className="profile__info_descr">Relationship</div>
                                                                <div className="info_relationship info_checkbox">{createField('', 'lookingForAJob', [], Input, { type: "checkbox" })}</div>
                                                            </div>

                                                            <div className="profile__info_item">
                                                                <div className="profile__info_descr">About me</div> 
                                                                <div className="profile__info_descr info_input">{createField('', 'aboutMe', [], Input)}</div>
                                                            </div>

                                                            <div className="profile__info_item">
                                                                <div className="profile__info_descr">Looking for a job description </div>
                                                                <div className="profile__info_descr info_input">{createField('my', 'lookingForAJobDescription', [], Input)}</div>
                                                            </div>

                                                            <div>{Object.keys(profile.contacts).map(key => {
                                                                return (
                                                                    <div key={key} className="profile__info_item">
                                                                        <div className="profile__info_descr">{key}</div> 
                                                                        <div className="profile__info_descr info_input">{createField(key, 'contacts.' + key, [], Input)}</div>
                                                                    </div>
                                                                )
                                                            })}</div>
                                                            <button className='save_info'>save</button>
                                            </div>

        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;