import React from "react";
import logo from "../../logo.png";
import header from './Header.module.sass';
import {NavLink} from "react-router-dom";
import setAuthToken from "../../API/setAuthToken";
import {logout} from "../../Redux/AuthReducer";
import {connect} from "react-redux"


class Header extends React.Component {


    out = () => {
        setAuthToken(false);
        this.props.logout({});
    }

    render() {
        return (
            <header>
                <img src={logo}/>
                <div className={header.nav}>
                    {this.props.isAuth ?
                        <NavLink className={header.out} to={"/login"} onClick={() => this.out()}>Logout</NavLink> :
                        <><NavLink to="/login">Login</NavLink> <NavLink to="/singin">SingIn</NavLink></>
                    }
                </div>
            </header>
        );
    }
}

let mapStateToProps = (state) => {return {isAuth: state.AuthPage.isAuth}}

export default connect(mapStateToProps, {logout: logout})(Header);