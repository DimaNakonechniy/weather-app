import axios from "utils/axios";

import { WeatherInfo } from "types";

export const weatherAPI = {
  getWeatherByCityName(cityName: string) {
    return axios.get<WeatherInfo>("weather", {
      params: {
        q: cityName,
        units: "metric",
      },
    });
  },
};
