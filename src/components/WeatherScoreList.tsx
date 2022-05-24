import React from 'react';
import {
  getLocation,
  getCurrentArea,
  getHourlyWeather,
  getCurrentWeather,
} from 'api/getWeatherData';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { HourlyWeatherType } from 'types/apiTypes';
import WeatherMain from './WeatherMain';
import { postWeatherinfo } from 'api/postWeatherData';

const WeatherScore = styled.div`
  margin-top: 15px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-bottom: 20px;
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
  margin-top: 15px;
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
      height: 40px;
      background-color: #fff;
      width: 100%;
    }
    & > .temp {
      color: #000000;
      height: 30px;
      background-color: #fff;
      width: 100%;
      border-bottom-left-radius: 14px;
      border-bottom-right-radius: 14px;
    }
  }
`;

export const WeatherScoreList = () => {
  const pos = getLocation();
  const { data: addressData } = useQuery(
    ['addressData', pos],
    () => getCurrentArea(pos),
    {
      suspense: true,
    },
  );
  const { data: hourlyData } = useQuery(
    ['hourlyData', addressData!.address],
    () => getHourlyWeather(addressData!.address),
    {
      enabled: !!addressData,
      suspense: true,
    },
  );
  const { data: currentData } = useQuery(
    ['currentData', addressData!.address],
    () => getCurrentWeather(addressData!.address),
    {
      enabled: !!addressData,
      suspense: true,
    },
  );
  const { data: scoreData } = useQuery(
    ['scoreData', addressData!.address],
    () => postWeatherinfo(addressData!.address, 'clear', 0),
    {
      enabled: !!addressData,
      suspense: true,
    },
  );
  return (
    <>
      <WeatherMain
        locationName={currentData!.location}
        weatherCode={currentData!.weather_main}
        temperature={currentData!.current_temp}
        criteriaTime={currentData!.current_dt}
      />
      <WeatherScore>
        오늘의 날씨 점수는{' '}
        <strong style={{ fontSize: 20, marginLeft: 5 }}>
          {parseInt(scoreData![0].toFixed())}
        </strong>
        점 입니다
      </WeatherScore>
      <span
        style={{
          fontSize: 20,
          fontFamily: 'AppleSDGothicNeoB00',
        }}
      >
        시간대별 날씨
      </span>
      <WeatherScoreListContainer>
        {hourlyData?.map((data: HourlyWeatherType, idx: number) => (
          <div key={idx} className="mini-calendar">
            <div className="date">{data.dt}</div>
            <div className="score" style={{ fontSize: 20 }}>
              {data.weather}
            </div>
            <div className="temp" style={{ fontSize: 14 }}>
              {parseInt(data.temp.toFixed())}°C
            </div>
          </div>
        ))}
      </WeatherScoreListContainer>
    </>
  );
};
