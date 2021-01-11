import React from 'react';
import './Messages.css';
import HeaderMessages from './HeaderMessages/HeaderMessages';
import ContentMessages from './ContentMessages/ContentMessages';
import CreateMessages from './CreateMessages/CreateMessages';




const Messages = (props) => {
    return (
        <div className="messages">
           
            <HeaderMessages />

            <ContentMessages 
                messagesData={props.messagesData}
            />

            <CreateMessages 
                valueMessageText={props.valueMessageText}
                addMessage={props.addMessage}
                updateValueMessageText={props.updateValueMessageText}
            />

        </div>

    );
};

export default Messages;