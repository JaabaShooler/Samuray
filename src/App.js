import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContanier";
import {Route} from "react-router-dom";


function App(props) {
    // debugger;
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="main-content">
                <NavBar/>
                <Route path='/profile'
                       render={ () => <Profile/> }
                />
                <Route path='/dialogs'
                       render={ () => <DialogsContainer/> }
                />
            </div>
        </div>
    );
}

export default App;
