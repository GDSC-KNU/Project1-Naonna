import axios from 'axios';
import { SendWeatherType } from 'types/apiTypes';

export const postWeatherinfo: (
  location: string,
  weather: string,
  wind: number,
) => Promise<void> = async (
  location: string,
  weather: string,
  wind: number,
) => {
  const sendWeatherData: SendWeatherType = {
    location,
    weather,
    wind,
  };
  try {
    const response = await axios.post('/', sendWeatherData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
