import { getDatum } from 'api/mockApi';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemSelector from './ItemSelector';

const LocationSelectContainer = styled.div`
  background-color: #e5e5e5;
`;
const TopTitle = styled.div`
  box-sizing: border-box;
  height: 50px;
  padding: 15px;
  margin: auto;
  margin-top: 33px;
  margin-bottom: 25px;
  background-color: #fff;
  border-radius: 10px;
  width: calc(100% - 30px);
  font-size: 16px;
`;

const Divider = styled.div`
  height: 17px;
`;

const LocationSelect = () => {
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

  return (
    <LocationSelectContainer>
      <TopTitle>📍 일정이 있는 지역을 선택하세요</TopTitle>
      <ItemSelector
        title="시/도"
        items={cityData}
        selected={selectedCity}
        setSelected={setSelectedCity}
      />
      <Divider />
      <ItemSelector
        title="군/구"
        items={townData}
        selected={selectedTown}
        setSelected={setSelectedTown}
      />
      <Divider />
      <ItemSelector
        title="읍/면/동"
        items={villageData}
        selected={selectedVillage}
        setSelected={setSelectedVilage}
      />
    </LocationSelectContainer>
  );
};

export default LocationSelect;
