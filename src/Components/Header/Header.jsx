import React from "react";
import logo from "../../logo.png";
import header from './Header.module.sass';



const Header = () => {
    return (
        <header>
            <img src={logo} />
        </header>
    );
}

export default Header;