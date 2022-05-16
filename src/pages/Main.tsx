import React from 'react';
import WeatherMain from 'components/WeatherMain';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { hourlyWeatherType} from 'types/apiTypes';
import Stack from 'components/Stack';
import Pill from 'components/Pill';
import { useQuery } from 'react-query';
import { getHourlyWeather, getCurrentWeather} from 'api/getWeatherData';;


const WeatherScore = styled.div`
  margin-top: 15px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-bottom:20px;
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
  margin-top:15px;
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
  const area = '대구 북구';
  const {isLoading:hourlyIsLoading,error:hourlyError,data:hourlyData} = useQuery(["hourlyData", area],()=>getHourlyWeather(area));
  const {isLoading:currentIsLoading,error:currentError,data:currentData} = useQuery(["currentData", area],()=>getCurrentWeather(area));
  return (
    <Stack
      style={{
        width: 390,
        height: 844,
        padding: 30,
        backgroundColor: '#f5f5f5',
        borderRadius:30,
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
              border: 'transparent',
              fontSize: '20px',
              color: 'white',
              backgroundColor: '#001f8e',
              marginBottom: '20px',
              fontFamily: 'AppleSDGothicNeoB00',
            }}
          >
            <span style={{fontSize:16,marginLeft:10}}>약속을 정해보세요</span>
            <span style={{ position: 'absolute', right: '25px' }}>&gt;</span>
          </Pill>
        </Link>
        {currentError && <span>error</span>}
        {currentIsLoading ? <span>loading...</span>
         : 
        <WeatherMain
        locationName={currentData ? currentData.location : ""}
        weatherCode={currentData ? currentData.weather_main : ""}
        temperature={currentData ? currentData.current_temp : 0}
        criteriaTime={currentData ? currentData.current_dt: ""}
      />
        }
        {currentIsLoading ? <span>loading...</span>
         : 
        <WeatherScore>
          오늘의 날씨 점수는 <strong style={{fontSize:20,marginLeft:5}}>{currentData?.todayScore}</strong>점 입니다
        </WeatherScore>
        }
        <span 
          style={{
              fontSize:20,
              fontFamily:'AppleSDGothicNeoB00',
            }}
            >시간대별 날씨</span>
        <WeatherScoreListContainer>
          {hourlyError && <span>error</span>}
          {hourlyIsLoading ? <span>loading...</span>
          : hourlyData?.map((data:hourlyWeatherType, idx:number) => (
            <div key={idx} className="mini-calendar">
              <div className="date">{data.dt}</div>
              <div className="score" style = {{fontSize:20}}>{data.weather}</div>
            </div>
          ))}
        </WeatherScoreListContainer>
      </Stack>
    </Stack>
  );
};

export default Main;
