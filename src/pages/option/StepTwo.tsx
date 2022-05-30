import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOptionStore } from 'store/store';
import ItemSelector from '../../components/ItemSelector';
import district from '../../district.json';
import {
  TopTitle,
  Divider,
  BottomButton,
  ComponentContainer,
} from '../../components/styles/common';
import { NonMetropolitanCityType } from 'types/districtType';

const LocationSelect = () => {
  const navigate = useNavigate();
  const selectedArea = useOptionStore(state => state.selectedArea);
  const setSelectedArea = useOptionStore(state => state.setSelectedArea);
  const [firstArea, setFirstArea] = useState('');
  const [secondArea, setSecondArea] = useState('');
  const [thirdArea, setThirdArea] = useState('');

  const cityData = Object.keys(district);
  const townData = firstArea
    ? firstArea.endsWith('시')
      ? (district[firstArea as keyof typeof district] as string[])
      : Object.keys(district[firstArea as keyof typeof district])
    : [];

  useEffect(() => {
    const setAreas = [setFirstArea, setSecondArea, setThirdArea];
    selectedArea.split(' ').map((area, idx) => {
      setAreas[idx](area);
    });
  }, []);
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
        selected={firstArea}
        setSelected={selected => {
          setFirstArea(selected);
          setSecondArea('');
        }}
      />
      <Divider />
      <ItemSelector
        title={firstArea.endsWith('시') ? '구' : '시'}
        items={townData}
        selected={secondArea}
        setSelected={selected => {
          setSecondArea(' ' + selected);
          setThirdArea('');
        }}
      />
      {firstArea.endsWith('도') && (
        <ItemSelector
          title="구/군"
          items={
            district[firstArea as keyof NonMetropolitanCityType][
              secondArea.trim()
            ]
          }
          selected={thirdArea}
          setSelected={selected => setThirdArea(' ' + selected)}
        />
      )}
      <BottomButton
        disabled={firstArea.endsWith('도') ? !thirdArea : !secondArea}
        onClick={() => {
          setSelectedArea(firstArea + secondArea + thirdArea);
          navigate('../3');
        }}
      >
        선택 완료
      </BottomButton>
    </ComponentContainer>
  );
};

export default LocationSelect;
