import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.sass';
import store from "./Redux/ReduxStore";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import setAuthToken from "./API/setAuthToken";
import {login, loginThunk} from "./Redux/AuthReducer";
import jwt from "jsonwebtoken"
import {AuthAPI} from "./API/Api";


if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    AuthAPI.me(jwt.decode(localStorage.jwtToken).payload.id).then(res=> {console.log(res); return store.dispatch(login(res))});
}

console.log(store.getState())

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
);




serviceWorker.unregister();
