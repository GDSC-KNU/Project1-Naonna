// import OptionHeader from 'components/OptionHeader';
import StepHeader from 'components/StepHeader';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import StepOne from './option/StepOne';
import StepTwo from './option/StepTwo';
import StepThree from './option/StepThree';
import { useOptionStore } from 'store/store';

const Wrapper = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: #f5f5f5;
  border-radius: 30px;
`;

const Option = () => {
  const dateList = useOptionStore(state => state.dateList);
  const selectedTown = useOptionStore(state => state.selectedTown);
  return (
    <Wrapper>
      <StepHeader dateList={dateList} selectedTown={selectedTown} />
      <Routes>
        <Route path="/1" element={<StepOne />} />
        <Route path="/2" element={<StepTwo />} />
        <Route path="/3" element={<StepThree />} />
      </Routes>
    </Wrapper>
  );
};

export default Option;
