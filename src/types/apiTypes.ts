import { weatherType, windType } from './component-props';
export type MainScreenweatherType = {
  location: string;
  current_temp: number;
  weather_main: string;
  todayScore: number;
  current_dt: string;
};

export type recommendRequestType = {
  dateList: Date[];
  selectedCity: string;
  selectedTown: string;
  selectedVillage: string;
  weather: weatherType;
  wind: windType;
};

export type recommendResponseType = {
  location: {
    longitude: number;
    latitude: number;
  };
  recommendedDateList: Date[];
};

export type hourlyWeatherType = {
  weather : string;
  temp : number;
  weather_description : string,
  dt: string;
};

export type resultWeatherType = {
  location:string;
  weather_main : string;
  dt:string;
  temp_max : number;
  temp_min : number;
  uvi : number;
  humidity : number;
  rain : number;
  wind_speed : number;
  score : number;
  // 미세먼지
};

export type locationType = {
  longitude: number;
  latitude: number;
}

export type areaType = {
  address : string;
}