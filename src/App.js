import React from 'react';
import './App.css';
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";


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
