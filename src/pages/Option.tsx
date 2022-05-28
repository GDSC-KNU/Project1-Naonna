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
  width: 100%;
  height: 844px;
  background: #f5f5f5;
  border-radius: 30px;
`;

const Option = () => {
  const dateList = useOptionStore(state => state.dateList);
  const selectedArea = useOptionStore(state => state.selectedArea);
  const isSelectedAreaValid = selectedArea.match(/(시|구|군|동|군)$/);
  return (
    <Wrapper>
      <StepHeader
        isFirstStepCompleted={!!dateList}
        isSecondStepCompleted={!!isSelectedAreaValid}
      />
      <Routes>
        <Route path="/1" element={<StepOne />} />
        <Route path="/2" element={<StepTwo />} />
        <Route path="/3" element={<StepThree />} />
      </Routes>
    </Wrapper>
  );
};

export default Option;
