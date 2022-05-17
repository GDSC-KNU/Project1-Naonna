import { weatherType, windType } from 'types/component-props';
import { OptionData } from 'types/storeType';
import create from 'zustand';

export const useOptionStore = create<OptionData>(set => ({
  dateList: [],
  setDateList: (dates: Date[]) => {
    set(state => ({ ...state, dateList: dates }));
  },
  selectedCity: '',
  setSelectedCity: (city: string) => {
    set(state => ({ ...state, selectedCity: city }));
  },
  selectedTown: '',
  setSelectedTown: (town: string) => {
    set(state => ({ ...state, selectedTown: town }));
  },
  weather: 'clear',
  setWeather: (weather: weatherType) => {
    set(state => ({ ...state, weather: weather }));
  },
  wind: 0,
  setWind: (wind: windType) => {
    set(state => ({ ...state, wind: wind }));
  },
}));
