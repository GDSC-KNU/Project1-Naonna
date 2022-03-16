import React, { useEffect, useState } from 'react';
import WeatherMain from 'components/WeatherMain';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getWeatherInfo } from 'api/mockApi';
import { weatherType } from 'types/apiTypes';

const StyledLink = styled(Link)`
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
  @media screen and (min-width: 768px) {
    width: 375px;
    height: 820px;
    border: 1px solid black;
  }
  padding: 30px;
  display: flex;
  flex-direction: column;
<<<<<<< Updated upstream
=======
  background-color: #e5e5e5;
  font-family: AppleSDGothicNeoB00;
>>>>>>> Stashed changes
`;

const AppointmentWrapper = styled.div`
  display: flex;
  padding: 15px;
  width: calc(100% - 50px);
  border: 2.5px solid rgba(93, 95, 239, 0.5);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-size: 20px;
<<<<<<< Updated upstream
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`;

const WeatherScoreContainer = styled.div`
  border: 3px solid #9394d0;
  border-radius: 15px;
=======
  color: white;
  background-color: #001f8e;
  margin-bottom: 20px;
  font-family: AppleSDGothicNeoB00;
>>>>>>> Stashed changes
`;

const WeatherScore = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-radius: 15px;
<<<<<<< Updated upstream
  font-size: 18px;
=======
  font-family: AppleSDGothicNeoB00;
  font-size: 13pt;
>>>>>>> Stashed changes
  & strong {
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

const ComponentTitle = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  font-size: 18px;
  display: flex;
<<<<<<< Updated upstream
  justify-content: center;
=======
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
    background-color : #000000;
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
font-family: AppleSDGothicNeoB00;
  align-self: flex-start;
>>>>>>> Stashed changes
`;

const Main = () => {
  const [weatherInfo, setWeatherInfo] = useState<weatherType>(
    {} as weatherType,
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
        <StyledLink to="/option">
          <AppointmentWrapper>약속을 정해보세요</AppointmentWrapper>
        </StyledLink>
        <WeatherMain
          locationName={weatherInfo.location}
          weatherCode={weatherInfo.weatherCode}
          temperature={weatherInfo.temperature}
          criteriaTime={weatherInfo.criteriaTime}
        />
        <WeatherScore>
          오늘의 날씨 점수는 <strong>{weatherInfo.todayScore}</strong>점 입니다
        </WeatherScore>
        <WeatherScoreContainer>
          <ComponentTitle>이번주 날씨점수</ComponentTitle>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {weatherInfo.weekScoreData?.map((data, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div>{data.date}</div>
                <div>{data.score}</div>
              </div>
            ))}
          </div>
        </WeatherScoreContainer>
      </MainContent>
    </MainWrapper>
  );
};

export default Main;
