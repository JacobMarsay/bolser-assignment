// components/CityWeatherSection.tsx
import React, { useState } from "react";
import useWeatherData from "../../hooks/useWeatherData";
import ForeCastTrigger from "./ForecastTrigger";
import ForecastDisplay from "./ForecastDisplay";

const CityWeatherSection = () => {
  const [hasClicked, setHasClicked] = useState(false);
  const { weatherData, loading, error } = useWeatherData("Leeds");

  const toggleWeatherHandler = () => {
    setHasClicked((prevClicked) => !prevClicked);
  };

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!weatherData) {
    return <p>No weather data available.</p>;
  }

  const { current } = weatherData;

  return (
    <section>
      <div className="forecast__wrapper">
        <ForeCastTrigger toggle={toggleWeatherHandler} />
        {hasClicked && (
          <>
            <ForecastDisplay data={current} />
          </>
        )}
      </div>
    </section>
  );
};

export default CityWeatherSection;
