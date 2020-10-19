import React from "react";
import navbar from './NavBar.module.sass'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/profile" activeClassName={navbar.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={navbar.active}>Messages</NavLink></li>
                <li><NavLink to="#">Main Content</NavLink></li>
                <li><NavLink to="#">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;