import {
  MainScreenweatherType,
  recommendRequestType,
  recommendResponseType,
} from 'types/apiTypes';

export const getWeatherInfo: () => MainScreenweatherType = () => {
  return {
    location: '대구 북구',
    temperature: 17,
    weatherCode: 'wi-day-cloudy',
    todayScore: 80,
    weekScoreData: [
      { date: '3/7', score: 80 },
      { date: '3/8', score: 70 },
      { date: '3/9', score: 60 },
      { date: '3/10', score: 40 },
      { date: '3/11', score: 99 },
      { date: '3/12', score: 10 },
      { date: '3/13', score: 20 },
      { date: '3/13', score: 20 },
      { date: '3/13', score: 20 },
      { date: '3/13', score: 20 },
    ],
    criteriaTime: '2022.03.03',
  };
};

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
    recommendedDateList: [
      new Date(2022, 2, 20),
      new Date(2022, 2, 22),
      new Date(2022, 2, 21),
    ],
  };
};
