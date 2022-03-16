import { getDatum } from 'api/mockApi';
import React, { useEffect, useState } from 'react';
import { subScreenProps } from 'types/component-props';
import ItemSelector from './ItemSelector';
import {
  TopTitle,
  Divider,
  BottomButton,
  ComponentContainer,
} from './styles/common';

const LocationSelect = ({ setNowActive }: subScreenProps) => {
  const [cityData, setCityData] = useState<string[]>([]);
  const [townData, setTownData] = useState<string[]>([]);
  const [villageData, setVillageData] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedTown, setSelectedTown] = useState<string>('');
  const [selectedVillage, setSelectedVilage] = useState<string>('');

  const getCityData = () => {
    const data = getDatum('시/도');
    setCityData(data);
    setSelectedTown('');
    setSelectedVilage('');
    setTownData([]);
    setVillageData([]);
  };

  const getTownData = () => {
    const data = getDatum(selectedCity);
    setTownData(data);
    setSelectedVilage('');
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
        onClick={() => setNowActive(3)}
      >
        선택 완료
      </BottomButton>
    </ComponentContainer>
  );
};

export default LocationSelect;
