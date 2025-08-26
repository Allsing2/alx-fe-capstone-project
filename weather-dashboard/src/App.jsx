import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import CurrentTimeCard from './components/CurrentTimeCard';

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
// OpenWeatherMap API key in the .env file as VITE_OPEN_WEATHER_API_KEY
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
// Function to fetch weather data from OpenWeatherMap API
  const fetchWeatherData = async (city) => {
    setErrorMessage('');
    setWeatherData({});
// Basic input validation
    if (!city) {
      setErrorMessage('Please enter a city name.');
      return;
    }
// Fetch weather data
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`);

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
// Parse and set weather data
      const data = await response.json();
      setWeatherData(data);
      setErrorMessage('');
// Handle case where timezone is not provided
      if (data.timezone === undefined) {
        setErrorMessage('Timezone information is unavailable for this location.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setErrorMessage('Could not connect to the weather service. Please check your internet connection or try again later.');
      setWeatherData({});
    }
  };
  // Fetch weather data when cityName changes
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
      <SearchBar onSearch={setCityName} />
      <ErrorMessage message={errorMessage} /> {/* Display error messages */}
      {Object.keys(weatherData).length > 0 && typeof weatherData.timezone === 'number' && (
        <CurrentTimeCard cityName={weatherData.name} timezoneOffset={weatherData.timezone}/>
      )}
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

export default App;
