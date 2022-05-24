import axios from 'axios';
import { SendWeatherType } from 'types/apiTypes';

export const postWeatherinfo: (
  location: string,
  weather: string,
  wind: number,
) => Promise<number[]> = async (
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
    const { data } = await axios.post<number[]>(
      `${process.env.REACT_APP_API_BASE_URL}/weathers/score`,
      sendWeatherData,
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
