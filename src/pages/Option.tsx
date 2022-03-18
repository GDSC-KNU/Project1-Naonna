// import OptionHeader from 'components/OptionHeader';
import StepHeader from 'components/StepHeader';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { weatherType, windType } from 'types/component-props';
import StepOne from './option/StepOne';
import StepThree from './option/StepThree';
import StepTwo from './option/StepTwo';

const Wrapper = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: #f5f5f5;
  border-radius: 30px;
`;

const Option = () => {
  const [dateList, setDateList] = useState<Date[]>([]);
  const [weather, setWeather] = useState<weatherType>('clear');
  const [wind, setWind] = useState<windType>(0);
  return (
    <Wrapper>
      <StepHeader dateList={dateList} />
      <Routes>
        <Route
          path="/1"
          element={<StepOne dateList={dateList} setDateList={setDateList} />}
        />
        <Route
          path="/2"
          element={
            <StepTwo
              weather={weather}
              setWeather={setWeather}
              wind={wind}
              setWind={setWind}
            />
          }
        />
        <Route path="/3" element={<StepThree />} />
      </Routes>
    </Wrapper>
  );
};

export default Option;
