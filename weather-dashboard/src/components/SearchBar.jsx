// SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [cityName, setCityName] = useState('');

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(cityName);
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        placeholder="Enter a city name..."
        value={cityName}
        onChange={handleChange}
        className="px-4 py-2 border rounded-md"
      />
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