import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import WeatherMain from 'components/WeatherMain';
import styled from 'styled-components';
import Stack from 'components/Stack';
import { ResultWeatherType } from 'types/apiTypes';
import { useQuery } from 'react-query';
import { getDustConcentration } from 'api/getWeatherData';
import {
  changeUVData,
  changeDustData,
  changeHumidityData,
} from 'api/changeWeatherData';
import { useOptionStore } from 'store/store';

const MainWrapper = styled.div`
  width: 390px;
  height: 800px;
  padding: 30px;
  background-color: #f5f5f5;
  font-family: AppleSDGothicNeoB00;
`;

const WeatherScore = styled.div`
  margin-top: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-radius: 15px;
  font-family: AppleSDGothicNeoB00;
  font-size: 13pt;
  & strong {
    margin-left: 5px;
    font-size: 20px;
    color: #1814af;
  }
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 5px;
  gap: 10px;
  margin-top: 10px;
  width: 184px;
  height: 39px;

  background: #ffffff;
  border-radius: 20px;
`;

const WeatherIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TemperatureBox = styled.div`
  display: flex;
  float: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 10px;
  margin-left: 20px;
  margin-top: 10px;
  width: 76px;
  height: 166px;

  background: #ffffff;
  border-radius: 20px;
`;

const TemperatureBar = styled.div`
  width: 7px;
  height: 135px;
  left: 277px;
  top: 514px;
  margin-right: 10px;
  background: linear-gradient(180deg, #ff5a5a 0%, #24bdff 100%);
  border-radius: 6px;
`;

const Temperature = styled.div`
  position: static;
  width: 22px;
  height: 22px;
  left: 288px;
  top: 512px;

  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  /* identical to box height, or 169% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.22px;

  color: #000000;
`;

const ResultDetail = ({
  dt: date,
  location: requestedLocation,
  weather_main: weatherCode,
  temp_max: tempMax,
  temp_min: tempMin,
  score,
  uvi,
  humidity,
  rank,
}: ResultWeatherType & { rank: number }) => {
  const location = useLocation();
  const setDateList = useOptionStore(state => state.setDateList);
  const setSelectedArea = useOptionStore(state => state.setSelectedArea);
  const setWeatherOption = useOptionStore(state => state.setWeather);
  const setWind = useOptionStore(state => state.setWind);
  const now = new Date();
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const targetDate = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
  );
  targetDate.setHours(targetDate.getHours() + 12);
  const unixTime = parseInt((targetDate.getTime() / 1000).toFixed(0));
  const {
    isLoading: dustIsLoading,
    error: dustError,
    data: dustData,
  } = useQuery(['dustData', location, unixTime], () =>
    getDustConcentration(requestedLocation, unixTime),
  );
  let monthString = '';
  if (now.getMonth() >= 9) {
    monthString = (now.getMonth() + 1).toString();
  } else {
    monthString = '0' + (now.getMonth() + 1).toString();
  }
  const criteriaTime =
    monthString +
    '-' +
    now.getDate().toString() +
    ' ' +
    now.getHours().toString() +
    '시';
  const uvIndex = changeUVData(uvi);
  const humidIndex = changeHumidityData(humidity);
  let dustIndex = '정보 없음';
  if (
    typeof dustData !== 'undefined' &&
    !dustIsLoading &&
    dustData.length !== 0
  ) {
    dustIndex = changeDustData(dustData![0].pm);
  }
  const refresh = () => {
    setDateList([]);
    setSelectedArea('');
    setWeatherOption('clear');
    setWind(0);
  };
  return (
    <MainWrapper>
      <Stack>
        <Link to="/">
          <img
            src="/image/logo/NaonnaMain.png"
            alt="weather Icon"
            style={{ width: 142.5, height: 60, cursor: 'pointer' }}
            onClick={() => {
              refresh();
            }}
          />
        </Link>
        <span style={{ fontSize: 30 }}>{rank}위</span>
        <span
          style={{
            fontSize: 15,
            textAlign: 'right',
            marginBottom: 5,
            marginRight: 20,
          }}
        >
          {year}.{month}.{day}
        </span>
        <WeatherMain
          locationName={requestedLocation}
          weatherCode={weatherCode}
          temperature={parseInt(((tempMax + tempMin) / 2).toFixed())}
          criteriaTime={criteriaTime}
        />
        <Stack row style={{ marginTop: 10, marginLeft: 20 }}>
          <Stack>
            <WeatherBox>
              <Stack row>
                <WeatherIcon style={{ marginRight: 25, background: '#f5f5f5' }}>
                  <div>🌞</div>
                </WeatherIcon>
                <div
                  style={{ marginTop: 5, width: '40%', textAlign: 'center' }}
                >
                  {uvIndex}
                </div>
                <WeatherIcon
                  style={{
                    position: 'relative',
                    left: '11%',
                    background: '#FFF7CC',
                  }}
                >
                  <div>{parseInt(uvi.toFixed())}</div>
                </WeatherIcon>
              </Stack>
            </WeatherBox>
            <div style={{ fontSize: 10, textAlign: 'right', marginRight: 10 }}>
              자외선 기준(지수)
            </div>
            <WeatherBox>
              <Stack row>
                <WeatherIcon style={{ marginRight: 25, background: '#f5f5f5' }}>
                  <div>💧</div>
                </WeatherIcon>
                <div
                  style={{ marginTop: 4, width: '40%', textAlign: 'center' }}
                >
                  {humidIndex}
                </div>
                <WeatherIcon
                  style={{
                    position: 'relative',
                    left: '11%',
                    background: '#FFCCCC',
                  }}
                >
                  <div>{humidity}</div>
                </WeatherIcon>
              </Stack>
            </WeatherBox>
            <div style={{ fontSize: 10, textAlign: 'right', marginRight: 10 }}>
              습도 기준(%)
            </div>
            <WeatherBox>
              <Stack row>
                <WeatherIcon style={{ marginRight: 25, background: '#f5f5f5' }}>
                  <div>😷</div>
                </WeatherIcon>
                <div
                  style={{ marginTop: 5, width: '40%', textAlign: 'center' }}
                >
                  {dustIndex}
                </div>
                <WeatherIcon
                  style={{
                    position: 'relative',
                    left: '11%',
                    background: '#CCFFE0',
                  }}
                >
                  <div>
                    {dustIsLoading || dustError || dustData!.length == 0
                      ? 'x'
                      : parseInt(dustData![0].pm.toFixed())}
                  </div>
                </WeatherIcon>
              </Stack>
            </WeatherBox>
            <div style={{ fontSize: 10, textAlign: 'right', marginRight: 10 }}>
              미세먼지 기준(㎍/m³)
            </div>
          </Stack>
          <TemperatureBox>
            <Stack row>
              <TemperatureBar />
              <Stack>
                <Temperature>{parseInt(tempMax.toFixed())}°C</Temperature>
                <Temperature style={{ marginTop: 88 }}>
                  {parseInt(tempMin.toFixed())}°C
                </Temperature>
              </Stack>
            </Stack>
          </TemperatureBox>
        </Stack>
        <WeatherScore>
          {`${parseInt(date.substring(5, 7))}월 ${parseInt(
            date.substring(8, 10),
          )}일`}
          의 날씨 점수는 <strong>{score}</strong>점 입니다
        </WeatherScore>
      </Stack>
    </MainWrapper>
  );
};

export default ResultDetail;
