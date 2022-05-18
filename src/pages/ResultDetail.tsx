import React from 'react';
import { useLocation } from 'react-router-dom';
import WeatherMain from 'components/WeatherMain';
import styled from 'styled-components';
import Stack from 'components/Stack';
import { resultWeatherType } from 'types/apiTypes';

const MainWrapper = styled.div`
  width: 390px;
  height: 844px;
  padding: 30px;
  background-color: #f5f5f5;
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
    margin-left:5px;
    font-size: 20px;
    color: #1814af;
  }
`;

const WeatherBox = styled.div`
  position: relative;
  margin-left : 5px;
  margin-right : 5px;
  width: 100px;
  height: 100px;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const ResultDetail = () => {
  const location = useLocation();
  const {
    dt : date,
    location: requestedLocation,
    weather_main : weatherCode,
    temp_max : tempMax,
    temp_min : tempMin,
    score,
    uvi,
    wind_speed : windSpeed,
    humidity,
  } = location.state as resultWeatherType;
  const now = new Date();
  let monthString = "";
  if(now.getMonth() >= 9){
    monthString = (now.getMonth()+1).toString();
  }
  else{
    monthString = '0'+(now.getMonth()+1).toString();
  }
  const criteriaTime = monthString + '-' + now.getDate().toString() + ' ' + now.getHours().toString() + '시';
  return (
    <MainWrapper>
      <Stack>
        <span style={{fontSize : 25,textAlign:'center',marginTop:10,marginBottom:20}}>{`${parseInt(date.substring(5,7))}월 ${parseInt(date.substring(8,10))}일`}</span>
        <WeatherMain
          locationName={requestedLocation}
          weatherCode={weatherCode}
          temperature={parseInt(((tempMax+tempMin)/2).toFixed())}
          criteriaTime={criteriaTime}
        />
        <Stack row style ={{marginTop:20}}>
          <WeatherBox>{uvi}</WeatherBox>
          <WeatherBox>{humidity}</WeatherBox>
          <WeatherBox>{windSpeed}</WeatherBox>
        </Stack>
        <WeatherScore>
          오늘의 날씨 점수는 <strong>{score}</strong>점 입니다
        </WeatherScore>
      </Stack>
    </MainWrapper>
  );
};

export default ResultDetail;
