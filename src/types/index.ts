export type WeatherInfo = {
  name: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
};
