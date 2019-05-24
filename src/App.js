import React from 'react';
// import axios from 'axios'
import './App.css';
import { HashRouter } from 'react-router-dom'
// import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import House from './Components/House/House'
// import Wizard from './Components/Wizard/Wizard'
import routes from "./routes"

function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="App-header">
      {/* <div className="Dashboard"> */}
        {/* <h1>Hello Caleb. I have a present for you:)</h1>
      </div> */}
      <div className="Header">Header</div>
      <div className="House">House</div>
      {/* <div className="Wizard"></div> */}
        {/* <Dashboard />
        <Header />
        <House />
        <Wizard /> */}
      </header>
    </div>
    </HashRouter>
  );
}

export default App
