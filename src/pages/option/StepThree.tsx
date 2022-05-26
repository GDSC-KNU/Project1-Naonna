import React from 'react';
import styled from 'styled-components';
import {
  AdditionalExplain,
  BottomButton,
  ComponentContainer,
  TopTitle,
} from 'components/styles/common';
import Warn from '../../icon/Warning';
import { useOptionStore } from 'store/store';
import { useNavigate } from 'react-router-dom';
import { weatherType, windType } from 'types/component-props';

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

const StepThree = () => {
  const navigate = useNavigate();
  const weather = useOptionStore(state => state.weather);
  const setWeather = useOptionStore(state => state.setWeather);
  const wind = useOptionStore(state => state.wind);
  const setWind = useOptionStore(state => state.setWind);
  const setCategory = (weather: weatherType, code: windType) => {
    setWeather(weather);
    setWind(code);
  };
  return (
    <ComponentContainer>
      <TopTitle>
        ⚙️ 약속의 종류에 따라
        <br />
        선호하는 날씨를{' '}
        <strong style={{ color: '#001f8e' }}>선택, 커스텀</strong> 할 수
        있습니다.
      </TopTitle>
      <AdditionalExplain
        style={{ alignSelf: 'flex-start', marginLeft: 20, marginTop: 10 }}
      >
        <div className="image-container">
          <Warn />
        </div>
        <span>선택한 옵션에 따라 날씨별 점수가 다르게 산정됩니다.</span>
      </AdditionalExplain>
      <HorizontalItemsContainer style={{ marginTop: 20 }}>
        <div className="title">카테고리</div>
        <div className="content">
          <div
            className={`item ${
              weather === 'clear' && wind === 0 ? 'active' : ''
            }`}
            onClick={() => setCategory('clear', 0)}
          >
            여행
          </div>
          <div
            className={`item ${
              weather === 'bitCloudy' && wind === 0 ? 'active' : ''
            }`}
            onClick={() => setCategory('bitCloudy', 0)}
          >
            간단한 운동
          </div>
          <div
            className={`item ${
              weather === 'cloudy' && wind === 1 ? 'active' : ''
            }`}
            onClick={() => setCategory('cloudy', 1)}
          >
            골프
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

      <BottomButton
        onClick={() => {
          navigate('/result');
        }}
      >
        선택 완료
      </BottomButton>
    </ComponentContainer>
  );
};

export default StepThree;
