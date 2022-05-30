import React from 'react';
import styled from 'styled-components';
import { WeatherMainProps } from 'types/component-props';

const ComponentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 35px;
  padding: 20px;
  font-family: AppleSDGothicNeoB00;
  border: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  width: 300px;
  height: 300px;
`;

const IconContainer = styled.div`
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  & img {
    width: 100%;
    height: 80%;
    margin-top: 10%;
  }
`;

const RightAlign = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-family: AppleSDGothicNeoB00;
`;

const StrongSpan = styled.span`
  font-weight: 600;
  font-size: 24px;
  font-family: AppleSDGothicNeoB00;
`;

const WeatherMain = ({
  locationName,
  weatherCode,
  temperature,
  criteriaTime,
}: WeatherMainProps) => {
  return (
    <ComponentMain>
      <StrongSpan style={{ color: '#001f8e' }}>{locationName}</StrongSpan>
      <IconContainer>
        <img src={`/image/weather-svg/${weatherCode}.svg`} alt="weather Icon" />
      </IconContainer>
      <StrongSpan style={{ color: '#001f8e' }}>{temperature}°C</StrongSpan>
      <RightAlign>
        <span>{criteriaTime} 기준</span>
      </RightAlign>
    </ComponentMain>
  );
};

export default WeatherMain;
