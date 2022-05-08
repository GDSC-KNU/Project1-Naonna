import React, { useEffect, useState } from 'react';
import WeatherMain from 'components/WeatherMain';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getWeatherInfo } from 'api/mockApi';
import { MainScreenweatherType } from 'types/apiTypes';
import Stack from 'components/Stack';
import Pill from 'components/Pill';

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

const Main = () => {
  const [weatherInfo, setWeatherInfo] = useState<MainScreenweatherType>(
    {} as MainScreenweatherType,
  );
  useEffect(() => {
    setWeatherInfo(getWeatherInfo());
  }, []);
  return (
    <Stack
      style={{
        width: 390,
        height: 844,
        padding: 30,
        backgroundColor: '#e5e5e5',
        fontFamily: 'AppleSDGothicNeoB00',
      }}
    >
      <header>
        <h1>Logo</h1>
      </header>
      <Stack>
        <Link to="/option/1">
          <Pill
            style={{
              position: 'relative',
              padding: 15,
              width: '100%',
              border: '2.5px solid rgba(93, 95, 239, 0.5)',
              boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
              fontSize: '20px',
              color: 'white',
              backgroundColor: '#001f8e',
              marginBottom: '20px',
              fontFamily: 'AppleSDGothicNeoB00',
            }}
          >
            <span>약속을 정해보세요</span>
            <span style={{ position: 'absolute', right: '25px' }}>&gt;</span>
          </Pill>
        </Link>
        <WeatherMain
          locationName={weatherInfo.location}
          weatherCode={weatherInfo.weatherCode}
          temperature={weatherInfo.temperature}
          criteriaTime={weatherInfo.criteriaTime}
        />
        <WeatherScore>
          오늘의 날씨 점수는 <strong>{weatherInfo.todayScore}</strong>점 입니다
        </WeatherScore>
        <h2>이번주의 날씨점수</h2>
        <WeatherScoreListContainer>
          {weatherInfo.weekScoreData?.map((data, idx) => (
            <div key={idx} className="mini-calendar">
              <div className="date">{data.date}</div>
              <div className="score">{data.score}</div>
            </div>
          ))}
        </WeatherScoreListContainer>
      </Stack>
    </Stack>
  );
};

export default Main;
