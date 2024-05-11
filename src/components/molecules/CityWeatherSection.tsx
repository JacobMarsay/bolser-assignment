// components/CityWeatherSection.tsx
import React from "react";
import useWeatherData from "../../hooks/useWeatherData";

const CityWeatherSection = () => {
  const { weatherData, loading, error } = useWeatherData("Leeds");

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!weatherData) {
    return <p>No weather data available.</p>;
  }

  const { location: weatherLocation, current } = weatherData;

  return (
    <div>
      <h2>Current Weather in {weatherLocation.name}</h2>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Condition: {current.condition.text}</p>
    </div>
  );
};

export default CityWeatherSection;
