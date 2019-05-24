import React from 'react';
// import axios from 'axios'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import House from './Components/House/House'
import Wizard from './Components/Wizard/Wizard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Dashboard">
        <h1>Hello Caleb. I have a present for you:)</h1>
      </div>
      <div className="Header"></div>
      <div className="House"></div>
      <div className="Wizard"></div>
        {/* <Dashboard />
        <Header />
        <House />
        <Wizard /> */}
      </header>
    </div>
  );
}

export default App;
