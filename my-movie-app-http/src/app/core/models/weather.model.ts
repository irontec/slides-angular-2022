export interface WeatherInfo {
  weather: Weather[],
  name: string
}

export interface Weather {
  main: string;
  description: string;
}