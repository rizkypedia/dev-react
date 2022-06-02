import React from "react";
import TemperatureConverter from "../lib/TemperatureConverter";
import TemperatureInput from "./TemperatureInput"

class TemperatureCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: 0, scale:'c'};
    }

    handleCelsiusChange(temperature) {

        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
     
        this.setState({scale:'f', temperature})
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        
        const celsius = scale === 'f' ? TemperatureConverter.format(TemperatureConverter.toCelsius(temperature)) : Number(temperature);
        const fahrenheit = scale === 'c' ? TemperatureConverter.format(TemperatureConverter.toFahrenheit(temperature)) : Number(temperature);
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                    <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}

export default TemperatureCalculator;