import axios from 'axios';
import {
  areaType,
  hourlyWeatherType,
  locationType,
  MainScreenweatherType,
  resultWeatherType,
} from 'types/apiTypes';

export const getHourlyWeather: (
  area: string,
) => Promise<hourlyWeatherType[]> = async (area: string) => {
  const { data } = await axios.get<hourlyWeatherType[]>(
    `${process.env.REACT_APP_API_BASE_URL}/weathers/hourly/${area}`,
  );
  const weatherList: hourlyWeatherType[] = [];
  data.forEach(key => {
    let icon = '';
    const hour = key.dt.substring(11, 13);
    switch (key.weather) {
      case 'Clear':
        if (parseInt(hour) <= 6 || parseInt(hour) >= 19) {
          icon = '🌕';
        } else {
          icon = '☀️';
        }
        break;
      case 'Clouds':
        switch (key.weather_description) {
          case 'few clouds':
            icon = '⛅';
            break;
          case 'scattered clouds':
            icon = '⛅';
            break;
          case 'broken clouds':
            icon = '☁️';
            break;
          case 'overcast clouds':
            icon = '☁️';
            break;
          default:
            icon = '☁️';
            break;
        }
        break;
      case 'BitClouds':
        icon = '⛅';
        break;
      case 'Rain':
        icon = '🌧️';
        break;
      case 'Snow':
        icon = '❄️';
        break;
      default:
        icon = '☀️';
        break;
    }
    weatherList.push({
      dt: hour + '시',
      weather: icon,
      weather_description: key.weather_description,
      temp: key.temp,
    });
  });
  return weatherList;
};

export const getCurrentWeather: (
  area: string,
) => Promise<MainScreenweatherType> = async (area: string) => {
  const { data } = await axios.get<MainScreenweatherType>(
    `${process.env.REACT_APP_API_BASE_URL}/weathers/current/${area}`,
  );
  const current: MainScreenweatherType = {
    location: area,
    current_temp: parseInt(data.current_temp.toFixed()),
    weather_main: data.weather_main,
    todayScore: 80,
    current_dt: data.current_dt.substring(5, 16),
  };
  return current;
};

export const getDailyWeather: (
  area: string,
) => Promise<resultWeatherType[]> = async (area: String) => {
  const { data } = await axios.get<resultWeatherType[]>(
    `${process.env.REACT_APP_API_BASE_URL}/weathers/daily/${area}`,
  );
  return data;
};

export const getLocation: () => locationType = () => {
  const data: locationType = {
    longitude: 0,
    latitude: 0,
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        data.longitude = position.coords.longitude;
        data.latitude = position.coords.latitude;
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      },
    );
  } else {
    alert('GPS를 지원하지 않습니다');
  }
  return data;
};

export const getCurrentArea: (pos: locationType) => Promise<areaType> = async (
  pos: locationType,
) => {
  const { data } = await axios.get<areaType>(
    `${process.env.REACT_APP_API_BASE_URL}/weathers/geo/${pos.latitude}/${pos.longitude}`,
  );
  return data;
};
