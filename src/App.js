import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="main-content">
                <NavBar/>
                <Route path='/profile'
                       render={ () => <Profile
                           ProfilePage={props.state.ProfilePage}
                           dispatch={props.dispatch}
                       /> }
                />
                <Route path='/dialogs'
                       render={ () => <Dialogs
                           ChatPage={props.state.ChatPage}
                           dispatch={props.dispatch}
                       /> }
                />
            </div>
        </div>
    );
}

export default App;
