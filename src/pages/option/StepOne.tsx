import React, { useCallback } from 'react';
import Calendar from 'components/resultCalendar';
import styled from 'styled-components';
import { StepOneProps } from 'types/component-props';
import {
  BottomButton,
  ComponentContainer,
  TopTitle,
} from 'components/styles/common';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

// const DescriptionBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   position: absolute;
//   width: 351px;
//   height: 51px;
//   left: 20px;
//   top: 207px;
//   align-items: center;
//   background: rgba(255, 255, 255, 0.5);
//   border-radius: 10px;
// `;
const Description = styled.div`
  position: static;
  width: 300px;
  height: 21px;
  left: 15px;
  top: 15px;
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;
const CalendarPos = styled.div`
  margin-top: 44px;
  margin-bottom: 90px;
  position: relative;
  width: 351px;
  height: 316px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectDes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 61px;
  height: 22px;
  left: 163px;
  top: 630px;
`;
const Ellipse = styled.div`
  position: static;
  width: 15px;
  height: 15px;
  left: 0px;
  top: 3.5px;
  background: #ccd2e8;
  border-radius: 50%;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const SelectText = styled.div`
  position: static;
  width: 37px;
  height: 22px;
  left: 24px;
  top: 0px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.22px;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 9px;
`;

const StepOne = ({ dateList, setDateList }: StepOneProps) => {
  const navigate = useNavigate();
  const dateOnClick = useCallback(
    e => {
      const date = moment();
      const target = e.target as HTMLElement;
      const closest = target.closest('button');
      if (!closest) return;
      const targetDay = new Date(date.format('YYYY/M/') + closest.textContent);
      console.log(dateList);
      if (closest) {
        if (dateList.some(day => day.getTime() === targetDay.getTime())) {
          setDateList(days =>
            days.filter(day => day.getTime() !== targetDay.getTime()),
          );
        } else {
          setDateList(days => [...days, targetDay]);
        }
        closest.classList.toggle('selected');
        console.log(closest);
      }
    },
    [dateList],
  );

  console.log(dateList);
  return (
    <ComponentContainer>
      <TopTitle>
        <Description>📅 가능한 날짜를 선택하세요.(다중선택 가능)</Description>
      </TopTitle>
      <CalendarPos>
        <Calendar
          dateList={dateList}
          setDateList={setDateList}
          dateOnClick={dateOnClick}
        />
      </CalendarPos>
      <SelectDes>
        <Ellipse />
        <SelectText>선택됨</SelectText>
      </SelectDes>
      <BottomButton
        disabled={dateList.length === 0}
        onClick={() => navigate('../2')}
      >
        선택 완료
      </BottomButton>
    </ComponentContainer>
  );
};
export default StepOne;
