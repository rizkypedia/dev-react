import logo from './logo.svg';
import React from "react";
import './App.css';
import ConsentManager from './components/ConsentManager/ConsentManager';
import LegalTextGenerator from './components/LegalTextGenerator/LegalTextGenerator';
import Welcome from './components/Welcome'
import TemperatureCalculator from './components/TemperatureCalculator';
import Gallery from './components/Tutorial/Gallery'
import TodoList from './components/Tutorial/TodoList';
import PackingList from './components/Tutorial/PackingList';
import List from './components/Tutorial/List'

function App() {
  return (
  
    <div className="App">
      <Gallery/>
      <TodoList/>
      <PackingList/>
      <List/>
    </div>
  );
}

export default App;
