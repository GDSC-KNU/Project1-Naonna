import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOptionStore } from 'store/store';
import ItemSelector from '../../components/ItemSelector';
import {
  TopTitle,
  Divider,
  BottomButton,
  ComponentContainer,
} from '../../components/styles/common';

const LocationSelect = () => {
  const navigate = useNavigate();
  const selectedCity = useOptionStore(state => state.selectedCity);
  const setSelectedCity = useOptionStore(state => state.setSelectedCity);
  const selectedTown = useOptionStore(state => state.selectedTown);
  const setSelectedTown = useOptionStore(state => state.setSelectedTown);

  const cityData = ['서울시', '대구시']; // TODO : 실제 JSON 데이터로 대체하기
  const townData = ['북구', '남구', '서구']; // TODO : 실제 JSON 데이터로 대체하기

  return (
    <ComponentContainer>
      <TopTitle
        style={{ marginBottom: '25px', width: 300, textAlign: 'center' }}
      >
        📍 일정이 있는 지역을 선택하세요
      </TopTitle>
      <ItemSelector
        title="시/도"
        items={cityData}
        selected={selectedCity}
        setSelected={selected => {
          setSelectedCity(selected);
          setSelectedTown('');
        }}
      />
      <Divider />
      <ItemSelector
        title="군/구"
        items={townData}
        selected={selectedTown}
        setSelected={selected => {
          setSelectedTown(selected);
        }}
      />
      <BottomButton
        disabled={!(selectedCity && selectedTown)}
        onClick={() => navigate('../3')}
      >
        선택 완료
      </BottomButton>
    </ComponentContainer>
  );
};

export default LocationSelect;
