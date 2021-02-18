import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContanier";
import {Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginContainer from "./Components/Auth/Login/LoginContainer";


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="main-content">
                <NavBar/>
                <Route path='/login'
                       render={ () => <LoginContainer/> }
                />
                <Route path='/profile'
                       render={ () => <Profile/> }
                />
                <Route path='/dialogs'
                       render={ () => <DialogsContainer/> }
                />
                <Route path='/users'
                       render={ () => <UsersContainer/> }
                />
                <Route path='/settings'
                       render={ () => <div>asd</div> }
                />
            </div>
        </div>
    );
}

export default App;
