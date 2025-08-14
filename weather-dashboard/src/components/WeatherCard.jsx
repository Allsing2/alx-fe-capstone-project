import React from 'react';

function WeatherDisplay({ weatherData }) {
  // We check if weatherData is empty here
  if (Object.keys(weatherData).length === 0) {
    return <p className="mt-4 text-gray-600">Enter a city to see the weather!</p>;
  }

  // If we have data, we display it
  return (
    <div className="mt-4 p-4 border rounded-md shadow-sm bg-white w-full max-w-md">
      <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
      <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
      <p>UV Index: {weatherData.uvi}</p> 
    </div>
  );
}

export default WeatherDisplay;