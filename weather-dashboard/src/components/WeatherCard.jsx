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
    <div className="flex flex-wrap">
      <div className="w-1/2 flex items-center space-x-2 py-2">
        <img src="images/sunny.png" alt="TemperatureIcon" className="w-6 h-6" />
        <span>Temperature: {weatherData.main.temp}°C</span>
      </div>
      <div className="w-1/2 flex items-center space-x-2 py-2">
        <img src="images/humidity.png" alt="HumidityIcon" className="w-6 h-6" />
        <span>Humidity: {weatherData.main.humidity}%</span>
      </div>
      <div className="w-1/2 flex items-center space-x-2 py-2">
        <img src="images/wind.png" alt="WindyIcon" className="w-6 h-6" />
        <span>Wind Speed: {weatherData.wind.speed} m/s</span>
      </div>
      <div className="w-1/2 flex items-center space-x-2 py-2">
        <img src="images/pressure.png" alt="PressureIcon" className="w-6 h-6" />
        <span>Pressure: {weatherData.main.pressure} hPa</span>
      </div>
      <div className="w-1/2 flex items-center space-x-2 py-2">
        <img src="images/sunrise.png" alt="SunriseIcon" className="w-6 h-6" />
        <span>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</span>
      </div>
      <div className="w-1/2 flex items-center space-x-2 py-2">
        <img src="images/sunset.png" alt="SunsetIcon" className="w-6 h-6" />
        <span>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</span>
      </div>
    </div>
  </div>
);
}

export default WeatherCard;