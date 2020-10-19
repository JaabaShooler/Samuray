import React from "react";
import navbar from './NavBar.module.sass'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li className={navbar.item}><a href="#">Profile</a></li>
                <li className={navbar.item}><a href="#">Messages</a></li>
                <li className={navbar.item}><a href="#">Main Content</a></li>
                <li className={navbar.item}><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;