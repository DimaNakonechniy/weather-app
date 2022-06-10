import { useQuery } from "react-query";

import { weatherAPI } from "utils/api";

import { WeatherInfo } from "types";

const getWeatherByCity = async (cityName: string) => {
  const response = await weatherAPI.getWeatherByCityName(cityName);

  return response;
};

const useWeather = (cityName: string) =>
  useQuery(["city-weather-info", cityName], async () => {
    let response = {} as WeatherInfo;

    if (cityName.length) {
      response = await getWeatherByCity(cityName);
    }

    return response;
  });

export default useWeather;
