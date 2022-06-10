import axios from "utils/axios";

export const weatherAPI = {
  getWeatherByCityName(cityName: string) {
    return axios.get("weather", {
      params: {
        q: cityName,
        units: "metric",
      },
    });
  },
};
