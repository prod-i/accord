import React from 'react';
import './CreateMessages.css';
import CreateMessageForm from './CreateMessageForm/CreateMessageForm';
import { reduxForm } from 'redux-form';

const CreateMessages = (props) => {
    const AddMessageFormRedux = reduxForm({ form: 'CreateMessageForm' })(CreateMessageForm)
    const addMessage = (values) => {
        props.addMessage(values.valueMessageText);
    }
    return (
        <div className="messages_create_message">

            <AddMessageFormRedux onSubmit={addMessage} />

        </div>
    );
};

export default CreateMessages;