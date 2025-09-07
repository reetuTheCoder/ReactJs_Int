import { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);

  const fahrenheit =  (celsius * 9/5) + 32;
  console.log("fahrenheit", fahrenheit);

  const kelvin = parseFloat(celsius) + 273.15;
  console.log("fahrenheit", kelvin);
  
  return (
    <div>
      <h1>Temperature Converter</h1>
      <input
        type="text"
        placeholder="Type your mesg..."
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
        <label for="input">°C</label>


      <p> {celsius}°C is {fahrenheit.toFixed(2)}°F and {kelvin.toFixed(2)}K.</p>
    </div>
  );
};

export default TemperatureConverter;
