import React from 'react';
// import Calendar from 'components/Calendar'
import styled from 'styled-components';

const Header = styled.div`
  position: absolute;
  width: 390px;
  height: 163px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 390px;
  height: 38px;
  left: 0px;
  top: 60px;
`;
const Name = styled.div`
  position: static;
  width: 74px;
  height: 22px;
  left: 158px;
  top: 8px;
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 98px;
`;
const Back = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 7px;
  top: 7px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  border:none;
  background-color:transparent;
  `;
const Step = styled.div`
  display: flex;
  position: absolute;
  width: 390px;
  height: 30px;
  left: 0px;
  top: 128px;
  background: #FFFFFF;
`;
const DayStep = styled.button`
  position: static;
  width: 90px;
  height: 25px;
  left: 25px;
  top: 0px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #001F8E;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 20px;
  border:none;
  background-color:transparent;
`;
const PosStep = styled.button`
  position: static;
  width: 90px;
  height: 25px;
  left: 145px;
  top: 0px;

  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #DDDDDD;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 20px;
  border:none;
  background-color:transparent;
`;
const CategoryStep = styled.button`
  position: static;
  width: 115px;
  height: 25px;
  left: 265px;
  top: 0px;

  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #DDDDDD;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 20px;
  border:none;
  background-color:transparent;
`;
const Line = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 116.67%;
  bottom: -16.67%;

  border: 1px solid #DDDDDD;
`;

const StepHeader = () => {
    return (
      <Header>
        <Title>
          <Back>&lt;</Back>
          <Name>약속 정하기</Name>
        </Title>
        <Step>
          <DayStep>날짜 선택</DayStep>
          <PosStep>위치 선택</PosStep>
          <CategoryStep>카테고리 선택</CategoryStep>
          <Line/>
        </Step>
      </Header>
    )
  };
  export default StepHeader;