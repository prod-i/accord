import React from 'react';
import './PostForm.css';
import {Field} from 'redux-form';
import {maxLength, required} from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLen = maxLength(1000);

const PostForm = (props) => {
    return (
        <form className="profile__inputPost_wrapper" onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'} className='profile__newpost' placeholder={'new post...'} validate={[required, maxLen]} />
            <button className="profile__newpost_add">add</button>
        </form>
    );
}

export default PostForm;