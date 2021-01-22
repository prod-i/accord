import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className="Header">
            <div className="header__wrapper">

                <div className="header__logo logo"><NavLink to="/" activeClassName='active'>accord</NavLink></div>
                {!showMenu
                ?   <div className="burger active">
                        {!props.isAuth ? <></> : <Navbar />}

                        <div className="header__login">
                            {props.isAuth ? <NavLink to={'/login'}><button className='header_login__b' onClick={props.logout}>log out</button></NavLink> : <NavLink to={'/login'}>log in</NavLink>}
                        </div>
                    </div>
                :   <div className="burger">
                        {!props.isAuth ? <></> : <Navbar />}

                        <div className="header__login">
                            {props.isAuth ? <NavLink to={'/login'}><button className='header_login__b' onClick={props.logout}>log out</button></NavLink> : <NavLink to={'/login'}>log in</NavLink>}
                        </div>
                    </div>
                }
                    

                <div class="nav-toggle" onClick={() => {setShowMenu(!showMenu)}}>
                    <span class="nav-toggle-item"></span>
                </div>
            </div>
        </header >
    );
};

export default Header;