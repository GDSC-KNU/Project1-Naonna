import { RecommendRequestType, RecommendResponseType } from 'types/apiTypes';

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
export const getFromServer = async () => {
  return await (
    await fetch('http://35.165.68.251/weaterhs/daily/daegu')
  ).json();
};
