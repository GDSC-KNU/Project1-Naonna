import { weatherType, windType } from './component-props';

export type OptionData = {
  dateList: Date[];
  setDateList: (dates: Date[]) => void;
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  weather: weatherType;
  setWeather: (weather: weatherType) => void;
  wind: windType;
  setWind: (wind: windType) => void;
  score:number[];
  setScore : (score:number[]) => void;
};
