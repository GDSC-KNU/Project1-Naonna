import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from "../icon/Arrow";

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
const Back = styled(Link)`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 1px;
  top: 7px;
  transform: scaleX(-1);
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
  width: 100%;
  height: 40px;
  left: 0px;
  top: 128px;
  background: #FFFFFF;
  border-bottom: 2px solid #DDDDDD;
`;
const DayStep = styled.button`
  position: static;
  width: 90px;
  height: 105%;
  left: 25px;
  top: 0px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #DDDDDD;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 20px;
  border:none;
  background-color:transparent;
  border-bottom : 2px solid;
`;
const PosStep =styled.button`
  position: static;
  width: 90px;
  height: 105%;
  left: 145px;
  top: 0px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
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
  border-bottom : 2px solid;
`;
const CategoryStep = styled.button`
  position: static;
  width: 115px;
  height: 105%;
  left: 265px;
  top: 0px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #DDDDDD;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 15px;
  border:none;
  background-color:transparent;
  border-bottom : 2px solid;
`;
const StepHeader = () => {
  const [case1, setCase1] = useState<string>('#DDDDDD');
  const [case2, setCase2] = useState<string>('#DDDDDD');
  const [case3, setCase3] = useState<string>('#DDDDDD');
  const goCase1 = () => {
    setCase1(case1 === "#DDDDDD" ? '#001F8E' : "#DDDDDD");
  }
  const goCase2 = () => {
    setCase2(case2 === "#DDDDDD" ? '#001F8E' : "#DDDDDD");
  }
  const goCase3 = () => {
    setCase3(case3 === "#DDDDDD" ? '#001F8E' : "#DDDDDD");
  }
    return (
      <Header>
        <Title>
          <Back to = "/"><Arrow/></Back>
          <Name>약속 정하기</Name>
        </Title>
        <Step>
          <DayStep style = {{color : case1}} onClick = {()=>goCase1()}>날짜 선택</DayStep>
          <PosStep style = {{color : case2}} onClick = {()=>goCase2()}>위치 선택</PosStep>
          <CategoryStep style = {{color : case3}} onClick = {()=>goCase3()}>카테고리 선택</CategoryStep>
        </Step>
      </Header>
    )
  };
  export default StepHeader;