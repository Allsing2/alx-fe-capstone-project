// src/components/CurrentTimeCard.jsx
import React, { useState, useEffect } from 'react';

/**
 * Displays the current time and date for a given city based on its timezone offset.
 *
 * @param {object} props - The component's props.
 * @param {string} props.cityName - The name of the city.
 * @param {number | null} props.timezoneOffset - The timezone offset in seconds from UTC.
 */
function CurrentTimeCard({ cityName, timezoneOffset }) {
  // State to hold the current local time and date string
  const [localDateTime, setLocalDateTime] = useState('');

  // Effect to update the time every second and whenever timezoneOffset or cityName changes
  useEffect(() => {
    // We only proceed if we have a city name and a valid timezone offset
    if (cityName && typeof timezoneOffset === 'number') {
      // Function to calculate and format the local time
      const updateTime = () => {
        // Get current UTC time in milliseconds
        const utcNow = Date.now();
        // Calculate the city's local time in milliseconds
        // (timezoneOffset is in seconds, so multiply by 1000 to convert to milliseconds)
        const cityLocalMilliseconds = utcNow + (timezoneOffset * 1000);
        // Create a Date object from the city's local milliseconds
        const cityDate = new Date(cityLocalMilliseconds);

        // Format the date and time
        const options = {
          weekday: 'long', // e.g., Monday
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit', // e.g., 01 AM
          minute: '2-digit', // e.g., 05
          second: '2-digit', // e.g., 30
          hour12: true, // Use 12-hour clock with AM/PM
        };
        setLocalDateTime(cityDate.toLocaleString('en-US', options));
      };

      // Call updateTime immediately to set the initial time
      updateTime();

      // Set up an interval to update the time every second (1000 ms)
      const intervalId = setInterval(updateTime, 1000);

      // Clean up the interval when the component unmounts or dependencies change
      return () => clearInterval(intervalId);
    } else {
      // Clear the time if city name or offset is not available
      setLocalDateTime('');
    }
  }, [cityName, timezoneOffset]); // Dependencies: re-run when city or offset changes

  // Don't render if there's no city name or time yet
  if (!cityName || !localDateTime) {
    return null;
  }

  return (
    <div className="mt-4 p-4 border rounded-md shadow-sm bg-white w-full max-w-md text-center">
      <h2 className="text-2xl font-semibold mb-2">{cityName}</h2>
      <p className="text-xl font-medium text-blue-700">{localDateTime}</p>
    </div>
  );
}

export default CurrentTimeCard;
