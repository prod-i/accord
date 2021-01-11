import React from 'react';
import './HeaderMessages.css';




const HeaderMessages = () => {
    return (
        <div className="messages__header">
            <div className="messages__item_avatar">
                <img src="https://sun9-49.userapi.com/c845122/v845122315/18e5e0/iAoBtrsGeFo.jpg" className="messages__item_avatar avatar" alt="avatar" />
            </div>  {/* avatar */}

            <div className="messages__user_info">
                <h2 className="dialogs__item_name">Test 1</h2>
                <p className="dialogs__item_time">1 minute ago</p>
            </div>  {/* name */}

            <div className="messages__settings">
                ●●●
            </div>  {/* settings */}
        </div>
    );
};

export default HeaderMessages;