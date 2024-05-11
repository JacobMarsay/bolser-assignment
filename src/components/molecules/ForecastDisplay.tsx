import React from "react";
import { WeatherData } from "../../types";

interface ForecastDisplayProps {
  data: WeatherData["current"];
}

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ data }) => {
  return (
    <div className="forecast__results">
      <div className="weather__info__wrapper">
        <div className="current__weather">
          <span>Currently:</span>
          <span>{data?.condition?.text}</span>
        </div>
        <div className="icon">
          <img src={data?.condition?.icon} alt={data?.condition?.text} />
        </div>
        <div className="weather__stats">
          <div className="info__box primary">
            <span>Temp: {data.temp_c}°C</span>
            <span>Visability: {data?.vis_miles}</span>
            <span>Wind Deg: {data?.wind_degree}</span>
          </div>
          <div className="info__box secondary">
            <span>Wind: {data?.wind_mph}</span>
            <span>Wind Dir: {data?.wind_dir}</span>
            <span>Humidity: {data?.humidity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastDisplay;
