// import OptionHeader from 'components/OptionHeader';
import StepHeader from 'components/StepHeader';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { weatherType, windType } from 'types/component-props';
import StepOne from './option/StepOne';
import StepTwo from './option/StepTwo';
import StepThree from './option/StepThree';
import { getRecommendedDate } from 'api/mockApi';

const Wrapper = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: #f5f5f5;
  border-radius: 30px;
`;

const Option = () => {
  const navigate = useNavigate();
  const [dateList, setDateList] = useState<Date[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedTown, setSelectedTown] = useState<string>('');
  const [selectedVillage, setSelectedVilage] = useState<string>('');
  const [weather, setWeather] = useState<weatherType>('clear');
  const [wind, setWind] = useState<windType>(0);

  const sendToServer = async () => {
    const recommendedDate = await getRecommendedDate({
      dateList,
      selectedCity,
      selectedTown,
      selectedVillage,
      weather,
      wind,
    });
    navigate('/result', { state: recommendedDate });
  };
  return (
    <Wrapper>
      <StepHeader dateList={dateList} selectedVillage={selectedVillage} />
      <Routes>
        <Route
          path="/1"
          element={<StepOne dateList={dateList} setDateList={setDateList} />}
        />
        <Route
          path="/2"
          element={
            <StepTwo
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              selectedTown={selectedTown}
              setSelectedTown={setSelectedTown}
              selectedVillage={selectedVillage}
              setSelectedVilage={setSelectedVilage}
            />
          }
        />
        <Route
          path="/3"
          element={
            <StepThree
              weather={weather}
              setWeather={setWeather}
              wind={wind}
              setWind={setWind}
              onBtnClick={sendToServer}
            />
          }
        />
      </Routes>
    </Wrapper>
  );
};

export default Option;
