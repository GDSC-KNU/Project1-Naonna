import { weatherType, windType } from './component-props';
export type MainScreenweatherType = {
  location: string;
  current_temp: number;
  weather_main: string;
  todayScore: number;
  current_dt: string;
};

export type RecommendRequestType = {
  dateList: Date[];
  selectedCity: string;
  selectedTown: string;
  selectedVillage: string;
  weather: weatherType;
  wind: windType;
};

export type RecommendResponseType = {
  date: Date;
  score: number;
};

export type HourlyWeatherType = {
  weather: string;
  temp: number;
  weather_description: string;
  dt: string;
};

export type ResultWeatherType = {
  location: string;
  weather_main: string;
  dt: string;
  temp_max: number;
  temp_min: number;
  uvi: number;
  humidity: number;
  rain: number;
  wind_speed: number;
  score: number;
};

export type LocationType = {
  longitude: number;
  latitude: number;
};

export type AreaType = {
  address: string;
};

export type DustType = {
  pm: number;
  dt: string;
};

export type SendWeatherType = {
  location: string;
  weather: string;
  wind: number;
};
