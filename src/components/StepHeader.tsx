import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HeaderProps } from 'types/component-props';

const Header = styled.div`
  width: 390px;
  height: 163px;
  left: 0px;
  top: 0px;
  background: #ffffff;
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
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  border: none;
  background-color: transparent;
`;
const Step = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0px;
  top: 128px;
  background: #ffffff;
  border-bottom: 2px solid #dddddd;
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
  color: #dddddd;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid;
  &.active {
    color: #001f8e;
  }
`;
const PosStep = styled.button`
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
  color: #dddddd;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid;
  &.active {
    color: #001f8e;
  }
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

  color: #dddddd;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 15px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid;
  &.active {
    color: #001f8e;
  }
`;
const StepHeader = ({ dateList, selectedTown }: HeaderProps) => {
  const navigate = useNavigate();
  const goCase1 = () => {
    navigate('./1');
  };
  const goCase2 = () => {
    navigate('./2');
  };
  const goCase3 = () => {
    navigate('./3');
  };
  return (
    <Header>
      <Title>
        <Back to="/">
          <img src="/image/ui-svg/toLeft.svg" alt="toLeft" />
        </Back>
        <Name>약속 정하기</Name>
      </Title>
      <Step>
        <DayStep
          className={window.location.href.endsWith('/1') ? 'active' : ''}
          onClick={() => goCase1()}
        >
          날짜 선택
        </DayStep>
        <PosStep
          className={window.location.href.endsWith('/2') ? 'active' : ''}
          disabled={dateList.length === 0}
          onClick={() => goCase2()}
        >
          위치 선택
        </PosStep>
        <CategoryStep
          className={window.location.href.endsWith('/3') ? 'active' : ''}
          disabled={!selectedTown}
          onClick={() => goCase3()}
        >
          카테고리 선택
        </CategoryStep>
      </Step>
    </Header>
  );
};
export default StepHeader;
