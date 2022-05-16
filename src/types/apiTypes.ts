import { weatherType, windType } from './component-props';
export type MainScreenweatherType = {
  location: string;
  temperature: number;
  weatherCode: string;
  todayScore: number;
  weekScoreData: {
    date: string;
    weather: string;
  }[];
  criteriaTime: string;
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
