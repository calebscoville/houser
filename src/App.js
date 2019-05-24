import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import House from './Components/House/House'
import Wizard from './Components/Wizard/Wizard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        <Header />
        <House />
        <Wizard />
      </header>
    </div>
  );
}

export default App;
