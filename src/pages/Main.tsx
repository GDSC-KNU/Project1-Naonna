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
    border: 5px solid black;
    border-radius: 5px;
  }
  padding: 30px;
  display: flex;
  flex-direction: column;
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
  font-weight: bold;
  color: white;
  background-color: #001f8e;
`;

const WeatherScoreContainer = styled.div`
  border: 3px solid #9394d0;
  border-radius: 15px;
`;

const WeatherScore = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-radius: 15px;
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
  justify-content: center;
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
          <AppointmentWrapper>
            <span>약속을 정해보세요</span>
            <span> &gt; </span>
          </AppointmentWrapper>
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
