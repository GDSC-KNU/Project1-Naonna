import React from 'react';
import styled from 'styled-components';
import { WeatherMainProps } from 'types/component-props';

const ComponentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 35px;
  padding: 20px;
  border: 1.5px solid #a5a6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const RightAlign = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const StrongSpan = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

const WeatherMain = ({
  locationName,
  weatherCode,
  temperature,
  criteriaTime,
}: WeatherMainProps) => {
  return (
    <ComponentMain>
      <StrongSpan>{locationName}</StrongSpan>
      <div style={{ width: 250, height: 250 }}>
        <img
          src={`weather-svg/${weatherCode}.svg`}
          alt="weather Icon"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <StrongSpan>{temperature}°C</StrongSpan>
      <RightAlign>
        <span>{criteriaTime} 기준</span>
      </RightAlign>
    </ComponentMain>
  );
};

export default WeatherMain;
