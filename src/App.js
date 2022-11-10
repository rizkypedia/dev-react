import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import TemperatureCalculator from './components/TemperatureCalculator';

function App() {
  return (
    
    <div className="App">
      <Welcome name="Dr. Strange"/>
      <TemperatureCalculator />
    </div>
  );
}

export default App;
