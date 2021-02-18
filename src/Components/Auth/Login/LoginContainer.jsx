import React from "react";
import {connect} from "react-redux";
import {loginThunk} from "../../../Redux/AuthReducer";
import Login from "./Login";

class LoginContainer extends React.Component{
    render(){
        return <>
            <Login
                login={this.props.login}
                isAuth={this.props.isAuth}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.AuthPage.isAuth,
        user: state.AuthPage.user,
    }
}

export default connect(mapStateToProps,{login: loginThunk})(LoginContainer)
