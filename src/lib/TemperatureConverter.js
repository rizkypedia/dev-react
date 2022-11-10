class TemperatureConverter {

   static toCelsius(temperature) {
        return (temperature -32) * 5 / 9;
    }

    static toFahrenheit(temperature) {
        return (temperature * 9 / 5) + 32
    }

    static format(temperature) {
        
        const output = parseFloat(temperature)

        const rounded = Math.round(output*1000) / 1000;
        
        return rounded.toString();
    }

}

export default TemperatureConverter