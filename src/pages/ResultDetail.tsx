import React from 'react';
import { useLocation } from 'react-router-dom';
import WeatherMain from 'components/WeatherMain';
import styled from 'styled-components';
import { ResultDetailProps } from 'types/component-props';

const MainWrapper = styled.div`
  width: 390px;
  height: 844px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e5e5e5;
  font-family: AppleSDGothicNeoB00;
`;

const WeatherScore = styled.div`
  margin-top: 15px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-radius: 15px;
  font-family: AppleSDGothicNeoB00;
  font-size: 13pt;
  & strong {
    font-size: 20pt;
    color: #1814af;
  }
`;

const ResultDetail = () => {
  const location = useLocation();
  const {
    date,
    location: requestedLocation,
    weatherCode,
    temperature,
    criteriaTime,
    score,
  } = location.state as ResultDetailProps;
  console.log('date', date);
  return (
    <MainWrapper>
      <h1>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</h1>
      <WeatherMain
        locationName={requestedLocation}
        weatherCode={weatherCode}
        temperature={temperature}
        criteriaTime={criteriaTime}
      />
      <WeatherScore>
        오늘의 날씨 점수는 <strong>{score}</strong>점 입니다
      </WeatherScore>
    </MainWrapper>
  );
};

export default ResultDetail;
