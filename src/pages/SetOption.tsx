import React, { useState } from 'react';
import styled from 'styled-components';
import OptionHeader from 'components/OptionHeader';
import LocationSelect from 'components/LocationSelect';
import CategorySelect from 'components/CategorySelect';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  border: 1px solid black;
  align-items: center;
`;

const MainWrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SetOption = () => {
  const [nowActive, setNowActive] = useState<number>(2);
  return (
    <PageWrapper>
      <OptionHeader nowActive={nowActive} />
      <MainWrapper>
        {nowActive === 2 && <LocationSelect setNowActive={setNowActive} />}
        {nowActive === 3 && <CategorySelect />}
      </MainWrapper>
    </PageWrapper>
  );
};

export default SetOption;
