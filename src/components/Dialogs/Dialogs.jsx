import React from 'react';
import './Dialogs.css';
import Messages from './Messages/Messages';
import List from './List/List';


const Dialogs = (props) => {
    return (
        <div className="Dialogs">
            <div className="container">
                <div className="dialogs__wrapper wrapper">
        
                    <List 
                        listData={props.listData}
                    />  {/* Dialogs - Left side*/}
                    
                    <Messages 
                        messagesData={props.messagesData} 
                        addMessage={props.addMessage}
                    />  {/* Dialog - Right side*/}

                </div>
            </div>
        </div>
    );
};

export default Dialogs;