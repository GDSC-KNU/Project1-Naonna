import { weatherType, windType } from './component-props';

export type OptionData = {
  dateList: Date[];
  setDateList: (dates: Date[]) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedTown: string;
  setSelectedTown: (town: string) => void;
  weather: weatherType;
  setWeather: (weather: weatherType) => void;
  wind: windType;
  setWind: (wind: windType) => void;
};
