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
      <StrongSpan style={{color:'#001f8e'}}>{locationName}</StrongSpan>
      <div style={{ width: 250, height: 250 }}>
        <img
          src={`image/weather-svg/${weatherCode}.svg`}
          alt="weather Icon"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <StrongSpan style={{color:'#001f8e'}}>{temperature}°C</StrongSpan>
      <RightAlign>
        <span>{criteriaTime} 기준</span>
      </RightAlign>
    </ComponentMain>
  );
};

export default WeatherMain;
