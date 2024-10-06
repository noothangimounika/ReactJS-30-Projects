import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';  // Replace with your API key

  // Get user's current location using Geolocation API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        setError('Unable to retrieve location');
      }
    );
  }, []);

  // Fetch weather data based on location
  useEffect(() => {
    if (location.lat && location.lon) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
          );
          setWeatherData(response.data);
        } catch (error) {
          setError('Unable to fetch weather data');
        }
      };
      fetchWeather();
    }
  }, [location, API_KEY]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }



  

  return (
    <div>
      <h1>Weather in {weatherData.name}</h1>
      <h2>{weatherData.main.temp}°C</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>



      


    </div>
  );
};

export default Weather;
