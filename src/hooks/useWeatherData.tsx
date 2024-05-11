// src/hooks/useWeatherData.ts

import { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "../types";

interface WeatherHookResponse {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const useWeatherData = (location: string): WeatherHookResponse => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

        const response = await axios.get<WeatherData>(apiUrl);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error: any) {
        // Explicitly specify the type of 'error' as 'any' or 'string'
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  return { weatherData, loading, error };
};

export default useWeatherData;
