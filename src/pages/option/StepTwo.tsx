import React from 'react';
import styled from 'styled-components';
import {
  AdditionalExplain,
  BottomButton,
  ComponentContainer,
  TopTitle,
} from 'components/styles/common';
import { StepTwoProps, weatherType, windType } from 'types/component-props';
import { getWeatherData } from 'api/mockApi';
import { useNavigate } from 'react-router-dom';

const HorizontalItemsContainer = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  & .title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  & .content {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    width: 300px;
    &::-webkit-scrollbar {
      display: none;
    }
    & .item {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      font-size: 14px;
      border: 2px solid #dbdbdb;
      color: #dbdbdb;
      margin-right: 10px;
      padding: 10px 25px;
      white-space: nowrap;
      &.selected,
      &:hover,
      &.active {
        border: 2px solid #001f8e;
        color: #001f8e;
      }
    }
  }
`;

const StepTwo = ({ weather, wind, setWeather, setWind }: StepTwoProps) => {
  const navigate = useNavigate();
  const updateWeatherPreference = (code: number) => {
    const { weather, wind } = getWeatherData(code);
    setWeather(weather as weatherType);
    setWind(wind as windType);
  };
  return (
    <ComponentContainer>
      <TopTitle>
        ⚙️ 약속의 종류에 따라
        <br />
        선호하는 날씨를 <strong>선택, 커스텀</strong> 할 수 있습니다.
      </TopTitle>
      <AdditionalExplain style={{ alignSelf: 'flex-start' }}>
        <div className="image-container">
          <img src="/image/ui-svg/exclamination.svg" alt="exclamination" />
        </div>
        <span>선택한 옵션에 따라 날씨별 점수가 다르게 산정됩니다.</span>
      </AdditionalExplain>
      <HorizontalItemsContainer style={{ marginTop: 30 }}>
        <div className="title">카테고리</div>
        <div className="content">
          <div className="item" onClick={() => updateWeatherPreference(1)}>
            여행
          </div>
          <div className="item" onClick={() => updateWeatherPreference(2)}>
            간단한 운동
          </div>
          <div className="item" onClick={() => updateWeatherPreference(3)}>
            골프
          </div>
          <div className="item" onClick={() => updateWeatherPreference(1)}>
            무언가
          </div>
          <div className="item" onClick={() => updateWeatherPreference(2)}>
            또다른 무언가
          </div>
        </div>
      </HorizontalItemsContainer>
      <div style={{ height: '20px' }}></div>
      <HorizontalItemsContainer
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      >
        <div className="title">날씨</div>
        <div className="content">
          <div
            className={`item ${weather === 'clear' ? 'active' : ''}`}
            onClick={e => setWeather('clear')}
          >
            맑음
          </div>
          <div
            className={`item ${weather === 'bitCloudy' ? 'active' : ''}`}
            onClick={e => setWeather('bitCloudy')}
          >
            조금 흐림
          </div>
          <div
            className={`item ${weather === 'cloudy' ? 'active' : ''}`}
            onClick={e => setWeather('cloudy')}
          >
            흐림
          </div>
          <div
            className={`item ${weather === 'snow' ? 'active' : ''}`}
            onClick={e => setWeather('snow')}
          >
            눈
          </div>
          <div
            className={`item ${weather === 'rain' ? 'active' : ''}`}
            onClick={e => setWeather('rain')}
          >
            비
          </div>
        </div>
      </HorizontalItemsContainer>
      <HorizontalItemsContainer
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <div className="title">바람</div>
        <div className="content">
          <div
            className={`item ${wind === 0 ? 'active' : ''}`}
            onClick={e => setWind(0)}
          >
            맑음
          </div>
          <div
            className={`item ${wind === 1 ? 'active' : ''}`}
            onClick={e => setWind(1)}
          >
            조금
          </div>
          <div
            className={`item ${wind === 2 ? 'active' : ''}`}
            onClick={e => setWind(2)}
          >
            강함
          </div>
          <div
            className={`item ${wind === 3 ? 'active' : ''}`}
            onClick={e => setWind(3)}
          >
            매우 강함
          </div>
        </div>
      </HorizontalItemsContainer>

      <BottomButton onClick={() => navigate('../3')}>선택 완료</BottomButton>
    </ComponentContainer>
  );
};

export default StepTwo;
