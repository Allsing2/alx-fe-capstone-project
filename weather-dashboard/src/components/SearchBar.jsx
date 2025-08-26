
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  // state for city name input
  const [cityName, setCityName] = useState('');
  // handle input change
  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(cityName);
  };
// search bar component
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder="Enter a city or country name..."
        value={cityName}
        onChange={handleChange}
        className="px-4 py-2 border rounded-md"
      />
      {/* search button */}
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;