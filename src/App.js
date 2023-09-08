import logo from './logo.svg';
import React from "react";
import './App.css';
import ConsentManager from './components/ConsentManager/ConsentManager';
import LegalTextGenerator from './components/LegalTextGenerator/LegalTextGenerator';
import Welcome from './components/Welcome'
import TemperatureCalculator from './components/TemperatureCalculator';

function App() {
  return (
  
    <div className="App">
        <ConsentManager/>
        <LegalTextGenerator/>
    </div>
  );
}

export default App;
