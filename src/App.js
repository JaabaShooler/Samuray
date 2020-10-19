import React from 'react';
import './App.sass';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";


function App() {
  return (
    <div className="app-wrapper">
        <Header/>
          <div className="main-content">
              <NavBar/>
              <Profile/>
          </div>
    </div>
  );
}

export default App;
