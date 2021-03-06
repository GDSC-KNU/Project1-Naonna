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
    ? firstArea.endsWith('μ')
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
        π μΌμ μ΄ μλ μ§μ­μ μ ννμΈμ
      </TopTitle>
      <ItemSelector
        title="μ/λ"
        items={cityData}
        selected={firstArea}
        setSelected={selected => {
          setFirstArea(selected);
          setSecondArea('');
        }}
      />
      <Divider />
      <ItemSelector
        title={firstArea.endsWith('μ') ? 'κ΅¬' : 'μ'}
        items={townData}
        selected={secondArea}
        setSelected={selected => {
          setSecondArea(' ' + selected);
          setThirdArea('');
        }}
      />
      {firstArea.endsWith('λ') && (
        <ItemSelector
          title="κ΅¬/κ΅°"
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
        disabled={firstArea.endsWith('λ') ? !thirdArea : !secondArea}
        onClick={() => {
          setSelectedArea(firstArea + secondArea + thirdArea);
          navigate('../3');
        }}
      >
        μ ν μλ£
      </BottomButton>
    </ComponentContainer>
  );
};

export default LocationSelect;
