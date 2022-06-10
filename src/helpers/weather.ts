import { WeatherInfo } from "types";

const getTime = (timestamp: number) =>
  new Date(timestamp * 1000).toLocaleTimeString();

export const generateWeatherInfoArray = ({
  main,
  sys: { sunrise, sunset },
}: WeatherInfo) => [
  {
    name: "Temperature",
    value: `${main.temp} ${"\u00b0"}C`,
  },
  {
    name: "Pressure",
    value: `${main.pressure} hpa`,
  },
  {
    name: "Humidity",
    value: `${main.humidity} %`,
  },
  {
    name: "Sunrise",
    value: getTime(sunrise),
  },
  {
    name: "Sunset",
    value: getTime(sunset),
  },
];
