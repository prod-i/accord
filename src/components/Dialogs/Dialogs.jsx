import React, { useState } from 'react';
import './Dialogs.css';
import Messages from './Messages/Messages';
import List from './List/List';


const Dialogs = (props) => {
    const [showMode, setShowMode] = useState(false);
    const сheckShowMode = (condition) =>{
        setShowMode(condition);
    }
    return (
        <div className="Dialogs">
            <div className="container">
                <div className="dialogs__wrapper wrapper">
                    <div className="dialogs__wrapper wrapper">
                        {!showMode
                        ?   <>
                                <List 
                                    listData={props.listData}
                                    сheckShowMode={сheckShowMode}
                                />
                                <div className='selectDialog'>Выбирите диалог</div>
                            </>
                        :   <>
                                <Messages 
                                    messagesData={props.messagesData} 
                                    addMessage={props.addMessage}
                                    сheckShowMode={сheckShowMode}
                                />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;