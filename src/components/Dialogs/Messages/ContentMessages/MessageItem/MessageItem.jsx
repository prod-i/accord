import React from 'react';
import './MessageItem.css';

const MessageItem = (props) => {
    return (
        <div className="message__wrapper">
            <div className="message__item">{props.message}</div>
        </div>
    );
};

export default MessageItem;