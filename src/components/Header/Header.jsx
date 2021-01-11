import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Redirect } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="Header">
            <div className="header__wrapper">

                <div className="header__logo logo"><NavLink to="/" activeClassName='active'>accord</NavLink></div>

                {!props.isAuth ? <></> : <Navbar />}

                <div className="header__login">
                    {props.isAuth ? <NavLink to={'/login'}><button className='header_login__b' onClick={props.logout}>log out</button></NavLink> : <NavLink to={'/login'}>log in</NavLink>}
                </div>

            </div>
        </header>
    );
};

export default Header;