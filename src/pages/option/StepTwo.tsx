import { getDatum } from 'api/mockApi';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepTwoProps } from 'types/component-props';
import ItemSelector from '../../components/ItemSelector';
import {
  TopTitle,
  Divider,
  BottomButton,
  ComponentContainer,
} from '../../components/styles/common';

const LocationSelect = ({
  selectedCity,
  setSelectedCity,
  selectedTown,
  setSelectedTown,
  selectedVillage,
  setSelectedVilage,
}: StepTwoProps) => {
  const navigate = useNavigate();
  const [cityData, setCityData] = useState<string[]>([]);
  const [townData, setTownData] = useState<string[]>([]);
  const [villageData, setVillageData] = useState<string[]>([]);

  const getCityData = () => {
    const data = getDatum('시/도');
    setCityData(data);
    setTownData([]);
    setVillageData([]);
  };

  const getTownData = () => {
    const data = getDatum(selectedCity);
    setTownData(data);
    setVillageData([]);
  };

  const getVillageData = () => {
    const data = getDatum(selectedTown);
    setVillageData(data);
  };

  useEffect(() => {
    getCityData();
  }, []);

  useEffect(() => {
    if (selectedCity) getTownData();
  }, [selectedCity]);

  useEffect(() => {
    if (selectedTown) getVillageData();
  }, [selectedTown]);

  console.log(selectedCity, selectedTown, selectedVillage);

  return (
    <ComponentContainer>
      <TopTitle style={{ marginBottom: '25px' }}>
        📍 일정이 있는 지역을 선택하세요
      </TopTitle>
      <ItemSelector
        title="시/도"
        items={cityData}
        selected={selectedCity}
        setSelected={selected => {
          setSelectedCity(selected);
          setSelectedTown('');
          setSelectedVilage('');
        }}
      />
      <Divider />
      <ItemSelector
        title="군/구"
        items={townData}
        selected={selectedTown}
        setSelected={selected => {
          setSelectedTown(selected);
          setSelectedVilage('');
        }}
      />
      <Divider />
      <ItemSelector
        title="읍/면/동"
        items={villageData}
        selected={selectedVillage}
        setSelected={setSelectedVilage}
      />
      <BottomButton
        disabled={!(selectedCity && selectedTown && selectedVillage)}
        onClick={() => navigate('../3')}
      >
        선택 완료
      </BottomButton>
    </ComponentContainer>
  );
};

export default LocationSelect;
