import axios from 'axios';
import { hourlyWeatherType, MainScreenweatherType } from 'types/apiTypes';

export const getHourlyWeather : (area:string)=>Promise<hourlyWeatherType[]> = async(area:string) =>{
  const {data} = await axios.get<hourlyWeatherType[]>(
      `http://35.165.68.251/weathers/hourly/${area}`
    );
  const weatherList: hourlyWeatherType[] = [];
  data.forEach((key)=>{
    let icon = '';
      switch (key.weather){
        case 'Clear':
          icon = '☀';
          break;
        case 'Clouds':
          icon = '☁';
          break;
        case 'BitClouds':
          icon = '⛅';
          break;
        case 'Rain':
          icon = '🌧';
          break;
        case 'Snow':
          icon = '❄';
          break;
        default:
          icon = '☀';
          break;
      }
      const hour = key.dt.substring(11,13);
      weatherList.push({dt:hour+'시',weather:icon});
  });
  return weatherList;
};

export const getCurrentWeather:(area:string)=>Promise<MainScreenweatherType> = async(area:string) =>{
  const {data} = await axios.get<MainScreenweatherType>(
      `http://35.165.68.251/weathers/current/${area}`
    );
  const current :MainScreenweatherType = {
    location:area,
    current_temp:data.current_temp,
    weather_main : data.weather_main,
    todayScore : 80,
    current_dt : data.current_dt.substring(5,13) + '시'
  }
  console.log(current);
  return current;
};

export const getDailyWeather = async(area:String) =>{
  const {data} = await axios(
      `http://35.165.68.251/weathers/daily/${area}`
    );
  return data;
};