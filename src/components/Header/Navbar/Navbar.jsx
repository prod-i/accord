import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
                <nav className="header__nav nav">
                    <NavLink to="/profile" className="nav__link user" activeClassName='active'><i className="fa fa-user" aria-hidden="true"></i></NavLink>           {/* profile */ }
                    <NavLink to="/dialogs" className="nav__link message" activeClassName='active'><i className="fa fa-comment" aria-hidden="true"></i></NavLink>     {/* dialogs */ }
                    <NavLink to="/users" className="nav__link friends" activeClassName='active'><i className="fa fa-users" aria-hidden="true"></i></NavLink>         {/* users */   }
                    <NavLink to="/news" className="nav__link news" activeClassName='active'><i className="fa fa-book" aria-hidden="true"></i></NavLink>              {/* news */    }
                    <NavLink to="/settings" className="nav__link setting" activeClassName='active'><i className="fa fa-cog" aria-hidden="true"></i></NavLink>        {/* settings */}
                </nav>
    );
};

export default Navbar;