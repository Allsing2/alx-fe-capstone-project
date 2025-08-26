import React from 'react';

function WeatherCard({ weatherData }) {
  // waiting for user input
  if (Object.keys(weatherData).length === 0) {
    return <p className="mt-4 text-gray-600">Enter a city to see the weather!</p>;
  }

  // weather display
  return (
    <div className="mt-4 p-4 border rounded-md shadow-sm bg-white w-full max-w-md">
      <div
          className="absolute top-2 left-1/2 transform -translate-x-1/2 sm:right-10 sm:left-auto sm:translate-x-0 bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
        <span role="img" aria-label="compass" className="text-xl">🧭</span>
        <span className="text-green-600 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
          Current Location With Weather
        </span>
      </div>
      <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
      <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  );
}

export default WeatherCard;