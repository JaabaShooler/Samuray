import React from "react";
import css from "./Login.module.sass"
import {Field, reduxForm, submit} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} autocomplete={"off"}>
            <div>
                <Field component={"input"} name={"nickname"} type={"input"} placeholder={"Nickname"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} type={"password"} placeholder={"Password"}/>
            </div>
            <button type="submit" className={css.login}>Login</button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)


class Login extends React.Component {

    submit = values => {
        this.props.login(values)
    }

    render() {
        return <div className={css.main}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={this.submit}/>
        </div>
    }
}

export default Login;