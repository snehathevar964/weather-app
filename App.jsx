import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = () => {
    if (!city) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    // Generate random weather data
    const randomWeather = {
      temp: Math.floor(Math.random() * 40),
      humidity: Math.floor(Math.random() * 100),
      wind: Math.floor(Math.random() * 15), 
      condition: ["Sunny", "Cloudy", "Rainy", "Stormy", "Windy"][
        Math.floor(Math.random() * 5)
      ]
    };

    setWeather(randomWeather);
    setError("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather Dashboard (Demo)</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{city}</h2>
          <p>Temperature: {weather.temp} °C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.wind} m/s</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  );
}

export default App;
