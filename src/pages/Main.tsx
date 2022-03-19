import React, { useEffect, useState } from 'react';
import WeatherMain from 'components/WeatherMain';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getWeatherInfo } from 'api/mockApi';
import { MainScreenweatherType } from 'types/apiTypes';

const UnstyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const MainWrapper = styled.div`
  width: 390px;
  height: 844px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
  font-family: AppleSDGothicNeoB00;
`;

const AppointmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: calc(100% - 50px);
  border: 2.5px solid rgba(93, 95, 239, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 999px;
  font-size: 20px;
  color: white;
  background-color: #001f8e;
  margin-bottom: 20px;
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

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: AppleSDGothicNeoB00;
  width: 100%;
  & > div {
    width: 90%;
  }
`;

const WeatherScoreListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  flex-wrap: nowrap;
  overflow-x: auto;
  font-family: AppleSDGothicNeoB00;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > .mini-calendar {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 65px;
    flex-shrink: 0;
    border-radius: 14px;
    height: 87px;
    &:not(:last-child) {
      margin-right: 10px;
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > .date {
      background-color: #dbdbdb;
      height: 34px;
      width: 100%;
      font-size: 16px;
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;
    }
    & > .score {
      color: #001f8e;
      font-size: 20px;
      height: 53px;
      background-color: #fff;
      width: 100%;
      border-bottom-left-radius: 14px;
      border-bottom-right-radius: 14px;
    }
  }
`;

const ComponentTitle = styled.h2`
  align-self: flex-start;
`;

const Main = () => {
  const [weatherInfo, setWeatherInfo] = useState<MainScreenweatherType>(
    {} as MainScreenweatherType,
  );
  useEffect(() => {
    setWeatherInfo(getWeatherInfo());
  }, []);
  return (
    <MainWrapper>
      <header>
        <h1>Logo</h1>
      </header>
      <MainContent>
        <UnstyledLink to="/option/1">
          <AppointmentWrapper>
            <span>약속을 정해보세요</span>
            <span> &gt; </span>
          </AppointmentWrapper>
        </UnstyledLink>
        <WeatherMain
          locationName={weatherInfo.location}
          weatherCode={weatherInfo.weatherCode}
          temperature={weatherInfo.temperature}
          criteriaTime={weatherInfo.criteriaTime}
        />
        <WeatherScore>
          오늘의 날씨 점수는 <strong>{weatherInfo.todayScore}</strong>점 입니다
        </WeatherScore>
        <ComponentTitle>이번주의 날씨점수</ComponentTitle>
        <WeatherScoreListContainer>
          {weatherInfo.weekScoreData?.map((data, idx) => (
            <div key={idx} className="mini-calendar">
              <div className="date">{data.date}</div>
              <div className="score">{data.score}</div>
            </div>
          ))}
        </WeatherScoreListContainer>
      </MainContent>
    </MainWrapper>
  );
};

export default Main;
