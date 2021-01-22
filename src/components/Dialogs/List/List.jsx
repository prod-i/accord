import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './List.css';

const DialogItem = (props) => {
    let src = "/dialogs/" + props.id;
    return (
        <NavLink to={src} className="dialogs__item" activeClassName='active' onClick={() => {props.сheckShowMode(true)}}>
            <div className="dialogs__item_avatar">
                <img src="https://sun9-49.userapi.com/c845122/v845122315/18e5e0/iAoBtrsGeFo.jpg" className="dialogs__item_avatar avatar" alt="avatar" />
            </div>
            <div className="item__wrapper">
                <div className="dialogs__item_info">
                    <h2 className="dialogs__item_name">{props.name}</h2>
                    <p className="dialogs__item_time">1 minute ago</p>
                </div>
                <div className="dialogs__minimessage">
                    <p className="dialogs__minimessage_text">Привет, я хотел спроси...</p>
                </div>
            </div>
        </NavLink>
    );
};



const List = (props) => {
    let state = props.listData;
    let dialogsListItem = state
        .map((item) => <DialogItem key={item.id} name={item.name} id={item.id} сheckShowMode={props.сheckShowMode}/>);

    return (
        <div className="dialogs__list">
            {dialogsListItem}
        </div>
    );
};

export default List;