// src/App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import CurrentTimeCard from './components/CurrentTimeCard';

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchWeatherData = async (city) => {
    setErrorMessage('');
    setWeatherData({});

    if (!city) {
      setErrorMessage('Please enter a city name.');
      return;
    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acd9ecd666fb6eae8b258f2a4205143f&units=metric`);

      if (!response.ok) {
        let errorText = 'An unknown error occurred.';
        const errorData = await response.json();
        if (response.status === 404) {
          errorText = `City not found: "${city}". Please check the spelling.`;
        } else if (errorData && errorData.message) {
          errorText = `Error: ${errorData.message}`;
        }
        setErrorMessage(errorText);
        setWeatherData({});
        return;
      }

      const data = await response.json();
      setWeatherData(data);
      setErrorMessage('');

    } catch (error) {
      console.error('Error fetching weather data:', error);
      setErrorMessage('Could not connect to the weather service. Please check your internet connection or try again later.');
      setWeatherData({});
    }
  };
  
  useEffect(() => {
    if (cityName) {
      fetchWeatherData(cityName);
    } else {
      setWeatherData({});
      setErrorMessage('');
    }
  }, [cityName]);

  return (
    <div className="min-h-screen bg-blue-50 p-4 flex flex-col items-center relative">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
      
      {/* Non-clickable Div for Current Location, placed at the top-right corner */}
      <div
        className="absolute top-4 right-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2" // Removed cursor-pointer and hover/focus styles
      >
        {/* Compass Icon (using a Unicode character for simplicity) */}
        <span role="img" aria-label="compass" className="text-xl">🧭</span> 
        <span>Current Location</span>
      </div>

      <SearchBar onSearch={setCityName} />
      
      <ErrorMessage message={errorMessage} /> 

      {Object.keys(weatherData).length > 0 && typeof weatherData.timezone === 'number' && (
        <CurrentTimeCard 
          cityName={weatherData.name} 
          timezoneOffset={weatherData.timezone} 
        />
      )}

      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
