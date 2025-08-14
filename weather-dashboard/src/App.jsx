// src/App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [errorMessage, setErrorMessage] = useState(''); // New state for error messages

  const fetchWeatherData = async (city) => {
    // 1. Clear any previous error message and weather data before a new fetch
    setErrorMessage('');
    setWeatherData({}); // Clear old weather data when a new search starts

    if (!city) { // Prevent API call for empty city name
      setErrorMessage('Please enter a city name.');
      return;
    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acd9ecd666fb6eae8b258f2a4205143f&units=metric`);

      // 2. Check if the HTTP response was successful
      if (!response.ok) {
        let errorText = 'An unknown error occurred.';
        // Attempt to parse specific error messages from the API
        const errorData = await response.json();
        if (response.status === 404) {
          errorText = `City not found: "${city}". Please check the spelling.`;
        } else if (errorData && errorData.message) {
          errorText = `Error: ${errorData.message}`;
        }
        setErrorMessage(errorText);
        setWeatherData({}); // Ensure weather data is cleared on error
        return; // Stop execution if there's an error
      }

      const data = await response.json();
      setWeatherData(data); // Set weather data on success
      setErrorMessage(''); // Clear error message on successful fetch

    } catch (error) {
      // 3. Handle network errors or other unexpected issues
      console.error('Error fetching weather data:', error);
      setErrorMessage('Could not connect to the weather service. Please check your internet connection or try again later.');
      setWeatherData({}); // Ensure weather data is cleared on network error
    }
  };
  
  // useEffect to fetch weather data when cityName changes
  useEffect(() => {
    // Only fetch if cityName is not empty, otherwise keep showing placeholder
    if (cityName) {
      fetchWeatherData(cityName);
    } else {
      setWeatherData({}); // Clear weather data if cityName becomes empty
      setErrorMessage(''); // Clear error if cityName becomes empty
    }
  }, [cityName]);

  return (
    <div className="min-h-screen bg-blue-50 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
      {/* We pass setCityName down to SearchBar */}
      <SearchBar onSearch={setCityName} />
      
      {/* Render the ErrorMessage component */}
      <ErrorMessage message={errorMessage} /> 

      {/* We pass weatherData down to WeatherDisplay */}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
