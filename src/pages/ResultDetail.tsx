import React from 'react';
import { useLocation } from 'react-router-dom';
import WeatherMain from 'components/WeatherMain';
import styled from 'styled-components';
import { ResultDetailProps } from 'types/component-props';
import Stack from 'components/Stack';

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
      <Stack>
        <span style={{fontSize : 25,textAlign:'center',marginTop:10,marginBottom:20}}>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</span>
        <WeatherMain
          locationName={requestedLocation}
          weatherCode={weatherCode}
          temperature={temperature}
          criteriaTime={criteriaTime}
        />
        <Stack row style ={{marginTop:20}}>
          <WeatherBox></WeatherBox>
          <WeatherBox></WeatherBox>
          <WeatherBox></WeatherBox>
        </Stack>
        <WeatherScore>
          {`${date.getMonth() + 1}월 ${date.getDate()}일`}의 날씨 점수는 <strong>{score}</strong>점 입니다
        </WeatherScore>
      </Stack>
    </MainWrapper>
  );
};

export default ResultDetail;
