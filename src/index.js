import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.sass';
import store from "./Redux/State";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

let RenderEntireTree = (state) => {
    ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App state={state} dispatch={store.dispatch.bind(store)}
                         UpdateText={store.dispatch.bind(store)}/>
                </BrowserRouter>
            </React.StrictMode>,
        document.getElementById('root')
    );
}

RenderEntireTree(store.getState());

store.obs(RenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
