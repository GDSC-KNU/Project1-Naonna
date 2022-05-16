import {
  MainScreenweatherType,
  recommendRequestType,
  recommendResponseType,
} from 'types/apiTypes';

export const getDatum = (arg: string) => {
  const ret: string[] = [];
  for (let i = 0; i < 10; ++i) {
    ret.push(arg + i);
  }
  return ret;
};

export const getWeatherData = (code: number) => {
  switch (code) {
    case 1:
      return { weather: 'clear', wind: 0 };
    case 2:
      return { weather: 'bitCloudy', wind: 0 };
    case 3:
      return { weather: 'cloudy', wind: 1 };
    default:
      return { weather: 'clear', wind: 0 };
  }
};

export const getRecommendedDate = async (
  requestData: recommendRequestType,
): Promise<recommendResponseType> => {
  new Promise(resolve => setTimeout(resolve, 1000));
  return {
    location: {
      longitude: 36.21,
      latitude: 128.3542,
    },
    recommendedDateList: [
      new Date(2022, 4, 26),
      new Date(2022, 4, 10),
      new Date(2022, 4, 13),
    ],
  };
};

export const getFromServer = async () => {
  return await (
    await fetch('http://35.165.68.251/weaterhs/daily/daegu')
  ).json();
};
