import React from 'react';
import './ContentMessages.css';
import MessageItem from './MessageItem/MessageItem';

const ContentMessages = (props) => {

    let messagesListItem = props.messagesData
        .map(item => <MessageItem key={item.id} id={item.id} message={item.message} />);

    return (
        <div className="messages__content">
            {messagesListItem}
        </div>
    );
};

export default ContentMessages;