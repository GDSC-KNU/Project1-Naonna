import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useOptionStore } from 'store/store';
import { useQuery } from 'react-query';
import { getDailyWeather } from 'api/getWeatherData';
import { postWeatherinfo } from 'api/postWeatherData';
import { RecommendResponseType } from 'types/apiTypes';
import Deck from 'components/Deck';
import ResultDetail from '../components/ResultDetail';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0px;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;
const Buttons = styled.div`
  display: flex;
`;
const FooterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: static;
  width: 120px;
  height: 40px;
  left: 171px;
  top: 5.5px;
  background: #ffffff;
  border-radius: 30px;
  border: 2px solid #001f8e;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 19px;
  &:active {
    background: #001f8e;
  }
`;
const FooterText = styled.div`
  position: static;
  width: 81px;
  height: 20px;
  left: 19.5px;
  top: 10px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  &:active {
    color: #ffffff;
  }
  &:hover {
    cursor: pointer;
  }
`;

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const OptionResult = () => {
  const navigate = useNavigate();
  const dateList = useOptionStore(state => state.dateList);
  const setDateList = useOptionStore(state => state.setDateList);
  const selectedArea = useOptionStore(state => state.selectedArea);
  const setSelectedArea = useOptionStore(state => state.setSelectedArea);
  const weatherOption = useOptionStore(state => state.weather);
  const setWeatherOption = useOptionStore(state => state.setWeather);
  const windOption = useOptionStore(state => state.wind);
  const setWind = useOptionStore(state => state.setWind);
  const { data: weatherData } = useQuery(['dailyData', selectedArea], () =>
    getDailyWeather(selectedArea),
  );
  const { isLoading: isScoreLoading, data: scoreData } = useQuery(
    ['scoreData', selectedArea, weatherOption, windOption],
    () => postWeatherinfo(selectedArea, weatherOption, windOption),
  );
  const [recommendedDateList, setRecommendedDateList] = useState<Date[]>([]);
  const [cardList, setCardList] = useState<JSX.Element[]>([]);
  const refresh = () => {
    setDateList([]);
    setSelectedArea('');
    setWeatherOption('clear');
    setWind(0);
  };
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
      dateAndScoreList.sort(crit);
      dateAndScoreList.forEach(Date => {
        setRecommendedDateList(prev => [...prev, Date.date]);
      });
      dateAndScoreList.forEach((_, idx) => {
        const btDay =
          (dateAndScoreList[idx].date.getTime() - today.getTime()) /
          (1000 * 60 * 60 * 24);
        if (!weatherData || (weatherData && !weatherData[btDay])) return;
        console.log('bruh');
        setCardList((prev: JSX.Element[]) => [
          ...prev,
          <ResultDetail
            {...weatherData![btDay]}
            key={idx}
            location={selectedArea}
            score={parseInt(scoreData![btDay].toFixed())}
            rank={dateAndScoreList.length - idx}
          />,
        ]);
      });
      setCardList(prev => [
        <Footer key={dateAndScoreList.length}>
          <Buttons>
            <FooterButton
              onClick={() => {
                refresh(), navigate('../option/1');
              }}
            >
              <FooterText>다시 추천 받기</FooterText>
            </FooterButton>
            <FooterButton>
              <FooterText
                onClick={() => {
                  refresh(), navigate('/');
                }}
              >
                약속 잡기 완료
              </FooterText>
            </FooterButton>
          </Buttons>
          <span>
            추천받았던 날짜를 확인하려면
            <br />이 페이지를 스와이프 하세요!
          </span>
        </Footer>,
        ...prev,
      ]);
    }
    /**
     * Criteria Function For Sorting Response Date by score in descending order
     * @param {RecommendResponseType} a object to compare
     * @param {RecommendResponseType} b another object to compare with
     * @return {number} 1 if a.score < b.score -1 when vice versa  0 when same
     */
    function crit(a: RecommendResponseType, b: RecommendResponseType) {
      if (a.score < b.score) {
        return -1;
      }
      if (a.score > b.score) {
        return 1;
      }
      return 0;
    }
  }, [weatherData, scoreData]);
  useEffect(() => {
    console.log(recommendedDateList, 'recommendedDateList');
    console.log(cardList, 'cardList');
    console.log(weatherData, 'weatherData');
  }, [recommendedDateList, cardList, weatherData]);
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
      {/* <Modal content="swipe swipe ART" /> */}
      <Deck cards={cardList} />
    </div>
  );
};
export default OptionResult;
