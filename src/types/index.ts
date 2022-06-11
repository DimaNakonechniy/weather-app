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
  weather?: Weather[];
  coord?: {
    lat: number;
    lon: number;
  };
};

type Weather = {
  description: string;
};
