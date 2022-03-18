import StepHeader from 'components/StepHeader';
import React from 'react';
import Calendar from 'components/Calendar'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: #F5F5F5;
  border-radius: 30px;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 351px;
  height: 51px;
  left: 20px;
  top: 207px;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  `;
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
  position: absolute;
  width: 351px;
  height: 316px;
  left: 19px;
  top: 302px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
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
  background: #CCD2E8;
  border-radius: 50%;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`
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
const Next = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  width: 195px;
  height: 56px;
  left: 98px;
  top: 742px;
  border:none;
  background: #001F8E;
  border-radius: 20px;
`;
const NextText = styled.div`
  position: static;
  width: 68px;
  height: 25px;
  left: 63.5px;
  top: 15.5px;

  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;
const SetOptionOne = () => {
  const clickNext = ()=>{
    window.location.href = '/result';
  }
  return (
  <Wrapper>
    <StepHeader/>
    <DescriptionBox>
        <Description>📅 가능한 날짜를 선택하세요.(다중선택 가능)</Description>
    </DescriptionBox>
    <CalendarPos>
      <Calendar/>
    </CalendarPos>
    <SelectDes>
        <Ellipse/>
        <SelectText>선택됨</SelectText>
    </SelectDes>
    <Next onClick ={()=>clickNext()}>
      <NextText>선택 완료</NextText>
    </Next>
  </Wrapper>  
  )
};
export default SetOptionOne;
