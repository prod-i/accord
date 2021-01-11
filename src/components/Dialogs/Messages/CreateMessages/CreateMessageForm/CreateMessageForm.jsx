import React from 'react';
import './CreateMessageForm.css';
import { Field } from 'redux-form';
import { Textarea } from '../../../../common/FormsControls/FormsControls';
import {maxLength, required} from '../../../../../utils/validators/validators';

const maxLen = maxLength(1500);
const CreateMessageForm = (props) => {
    return (
        <form className="CreateMessageForm" onSubmit={props.handleSubmit}>

            <Field component={Textarea} name={'valueMessageText'} className='new_message' placeholder={'Новое сообщение...'} validate={[required, maxLen]} />

            <button className="add__voice"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>

        </form>
    );
}

export default CreateMessageForm;