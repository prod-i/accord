import React from 'react';
import './CreateMessageForm.css';
import { Field } from 'redux-form';
import { Textarea } from '../../../../common/FormsControls/FormsControls';
import {maxLength, required} from '../../../../../utils/validators/validators';

const maxLen = maxLength(1500);
const CreateMessageForm = (props) => {
    return (
        <form className="form_message" onSubmit={props.handleSubmit}>

            <div className="add__img"><i className="fa fa-plus-circle" aria-hidden="true"></i></div>     {/* add document */}

            <div className="CreateMessageWrapper">
                <Field component={Textarea} name={'valueMessageText'} className='new_message' placeholder={'Новое сообщение...'} validate={[required, maxLen]} />
            </div>

            <button className="add__voice"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>

        </form>
    );
}

export default CreateMessageForm;