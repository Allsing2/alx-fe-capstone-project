🌦️ React Weather Dashboard
A responsive web app built with React and Tailwind CSS, displaying real-time weather data for any city globally via the OpenWeatherMap API.
✨ Features
• City Search: Instantly get weather updates by city name.
• Detailed Current Weather: Displays temp, "feels like," pressure, humidity, wind speed, and weather condition with an icon.
• Live Local Time & Date: Shows the city's current local time and date, updated every second.
• Robust Error Handling: Provides specific messages for missing API keys, city not found, network issues, and API errors.
• Modern UI: Responsive design using Tailwind CSS.
🚀 Technologies
• React.js: UI development.
• Tailwind CSS: Styling.
• OpenWeatherMap APIs:
o Geocoding API (1.0): City name to coordinates.
o One Call API (3.0): Detailed weather data.
🛠️ Setup
Prerequisites
• Node.js (includes npm)
• npm or Yarn
Installation

1. Clone Repository:
2. git clone https://github.com/your-username/react-weather-dashboard.git
3. cd react-weather-dashboard

(Update URL if applicable.) 4. Install Dependencies: 5. npm install 6. # or 7. yarn install

8. API Key Configuration:
   a. Get Key: Obtain your API key from OpenWeatherMap (under "API keys" after signing up).
   b. Create .env: In your project's root (where package.json is), create a file named .env.
   c. Add Key: Add this line to .env, replacing the placeholder with your actual key:
   VITE_OPEN_WEATHER_API_KEY=your_actual_openweathermap_api_key_here

- No Quotes: Do not use quotes around the key value.
- Security: Add .env to .gitignore.

9. Start Server:
10. npm run dev
    App opens in browser (e.g., http://localhost:5173).
    👩‍💻 Usage
11. Enter a city name in the search bar.
12. Press Enter or click the search button.
13. View current weather, local time, and date.
    ⚠️ Error Messages
    • "API Key is missing...": VITE_OPEN_WEATHER_API_KEY is not set in .env.
    • "Please enter a city name.": Search submitted empty.
    • "City not found: "CityName". Please check the spelling.": Geocoding API couldn't find city.
    • "Weather service error: [API Message]": OpenWeatherMap API returned an error (e.g., "invalid API key").
    • "An API error occurred (Status Code: XXX).": Generic API error.
    • "Could not connect to the weather service...": Network connectivity issue.
    • "An unexpected error occurred. Please try again later.": General fallback error.
    ✨ Future Ideas
    • Loading spinner/skeleton UI.
    • Dark mode.
    • Multi-day/hourly forecasts.
    • Save favorite cities.
    • Geolocation for current location weather.
