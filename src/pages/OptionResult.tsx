import React, { useEffect, useState } from 'react';
import { useOptionStore } from 'store/store';
import { useQuery } from 'react-query';
import { getDailyWeather } from 'api/getWeatherData';
import { postWeatherinfo } from 'api/postWeatherData';
import { RecommendResponseType } from 'types/apiTypes';
import Deck from 'components/Deck';
import Loader from 'components/Loader/Loader';
import { CardType } from 'types/component-props';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const OptionResult = () => {
  const dateList = useOptionStore(state => state.dateList);
  const selectedArea = useOptionStore(state => state.selectedArea);
  const weatherOption = useOptionStore(state => state.weather);
  const windOption = useOptionStore(state => state.wind);
  const { data: weatherData } = useQuery(['dailyData', selectedArea], () =>
    getDailyWeather(selectedArea),
  );
  const { isLoading: isScoreLoading, data: scoreData } = useQuery(
    ['scoreData', selectedArea, weatherOption, windOption],
    () => postWeatherinfo(selectedArea, weatherOption, windOption),
  );
  const [cardList, setCardList] = useState<CardType[]>([]);
  useEffect(() => {
    const dateAndScoreList: RecommendResponseType[] = [];
    if (typeof scoreData !== 'undefined' && !isScoreLoading) {
      dateList.forEach(Date => {
        const index =
          (Date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
        const insert: RecommendResponseType = {
          date: Date,
          score: scoreData[index],
        };
        dateAndScoreList.push(insert);
      });
      dateAndScoreList.sort((prev, acc) => prev.score - acc.score);
      dateAndScoreList.forEach((_, idx) => {
        const btDay =
          (dateAndScoreList[idx].date.getTime() - today.getTime()) /
          (1000 * 60 * 60 * 24);
        if (
          !weatherData ||
          !scoreData ||
          (weatherData && !weatherData[btDay]) ||
          (scoreData && !scoreData[btDay])
        )
          return;
        setCardList((prev: CardType[]) => [
          ...prev,
          {
            ...weatherData![btDay],
            key: idx,
            location: selectedArea,
            score: parseInt(scoreData![btDay].toFixed()),
            rank: dateAndScoreList.length - idx,
          },
        ]);
      });
    }
  }, [weatherData, scoreData]);
  return isScoreLoading ? (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader />
    </div>
  ) : (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '15%',
      }}
    >
      <Deck cards={cardList} />
    </div>
  );
};
export default OptionResult;
