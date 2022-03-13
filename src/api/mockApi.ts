import { weatherType } from 'types/apiTypes';

export const getWeatherInfo: () => weatherType = () => {
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
