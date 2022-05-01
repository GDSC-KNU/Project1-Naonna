import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { recommendResponseType } from 'types/apiTypes';
import Calendar from 'components/resultCalendar';
import Warn from '../icon/Warning';
// import Down from "../icon/Down";

const Wrapper = styled.div`
  position: relative;
  width: 390px;
  height: 784.06px;

  background: #fafafa;
  border-radius: 30px;
`;

const CalendarPos = styled.div`
  position: absolute;
  width: 328px;
  height: 316px;
  left: calc(50% - 328px / 2);
  top: calc(50% - 316px / 2 - 175.03px);

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  height: 13px;
  left: calc(50% - 247px / 2 - 30.5px);
  top: calc(50% - 13px / 2 + 5.47px);
`;
const InfoText = styled.div`
  position: static;
  width: 234px;
  height: 13px;
  left: 13px;
  top: 0px;
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #001f8e;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 5px;
`;
const CommandDay = styled.div`
  position: absolute;
  width: 130px;
  height: 22px;
  left: calc(50% - 116px / 2 - 98px);
  top: calc(50% - 22px / 2 + 50.97px);
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height, or 110% */
  display: flex;
  align-items: center;
  letter-spacing: 0.22px;
  color: #000000;
`;
const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 320px;
  height: 38px;
  left: calc(50% - 370px / 2 + 4px);
  top: calc(50% - 38px / 2 + 104.97px);
`;
const ButtonFirst = styled.button`
  display: flex;
  float: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: static;
  width: 100px;
  height: 38px;
  font-family: 'AppleSDGothicNeoB00';
  left: calc(50% - 100px / 2 - 110px);
  top: calc(50% - 38px / 2);
  background: #fff7cc;
  border-radius: 20px;
  border: none;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  &:active {
    border: 2px solid #001f8e;
  }
`;
const ButtonSecond = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: static;
  width: 100px;
  height: 38px;
  border: none;
  left: calc(50% - 100px / 2);
  top: calc(50% - 38px / 2);
  background: #f1f1f1;
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;
  &:active {
    border: 2px solid #001f8e;
  }
`;
const ButtonThird = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: static;
  width: 100px;
  height: 38px;
  left: calc(50% - 100px / 2 + 110px);
  top: calc(50% - 38px / 2);
  background: #e5d6cc;
  border-radius: 20px;
  border: none;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 10px;
  &:active {
    border: 2px solid #001f8e;
  }
`;
const ButtonText = styled.div`
  position: static;
  width: 75px;
  height: 22px;
  left: 20px;
  top: 0px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: bold;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 9px;
`;
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 291px;
  height: 51px;
  left: calc(50% - 320px / 2 - 0.5px);
  top: calc(50% - 51px / 2 + 299.47px);
`;
const FooterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: static;
  width: 120px;
  height: 40px;
  left: 171px;
  top: 5.5px;
  background: #ffffff;
  border-radius: 30px;
  border: 2px solid #001f8e;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 19px;
  &:active {
    background: #001f8e;
  }
`;
const FooterText = styled.div`
  position: static;
  width: 81px;
  height: 20px;
  left: 19.5px;
  top: 10px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  &:active {
    color: #ffffff;
  }
`;
const OptionResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as recommendResponseType;
  const {
    recommendedDateList,
    // location: { longitude, latitude },
  } = state;
  console.log('state', state, recommendedDateList);

  const goAgain = () => {
    window.location.href = '/option/1';
  };
  const dateStringConvert = (date: Date) =>
    `${date.getMonth() + 1}월 ${date.getDate()}일`;

  const dateOnClick: React.MouseEventHandler<HTMLDivElement> = e => {
    const { target } = e;
    const closest = (target as HTMLDivElement).closest('button');
    if (!closest || closest.disabled) return;
    console.log(closest);
    const month = +closest.dataset.month! - 1;
    const day = +closest.innerText;
    navigate('./detail', {
      state: {
        date: new Date(new Date().getFullYear(), month, day),
        location: '대구 북구', // 나중에 getocoding으로 처리해야함
        weatherCode: 'ss', // 날씨 관련 string인데 이건 어떻게 해야할지 모르겠음
        temperature: 20,
        criteriaTime: '2020.01.01',
        score: 20,
      },
    });
  };
  return (
    <Wrapper>
      <CalendarPos>
        <Calendar
          rankDateList={recommendedDateList}
          dateOnClick={dateOnClick}
        />
      </CalendarPos>
      <Info>
        <Warn />
        <InfoText>
          달력의 날짜를 클릭하면 그 날의 날씨 정보를 알 수 있습니다.
        </InfoText>
      </Info>
      <CommandDay>추천 날짜 선택</CommandDay>
      <ButtonFrame>
        <ButtonFirst>
          <ButtonText>
            🥇 {dateStringConvert(recommendedDateList[0])}
          </ButtonText>
        </ButtonFirst>
        <ButtonSecond>
          <ButtonText>
            🥈 {dateStringConvert(recommendedDateList[1])}
          </ButtonText>
        </ButtonSecond>
        <ButtonThird>
          <ButtonText>
            🥉 {dateStringConvert(recommendedDateList[2])}
          </ButtonText>
        </ButtonThird>
      </ButtonFrame>
      <Footer>
        <FooterButton onClick={() => goAgain()}>
          <FooterText>다시 추천 받기</FooterText>
        </FooterButton>
        <FooterButton>
          <FooterText>약속 잡기 완료</FooterText>
        </FooterButton>
      </Footer>
    </Wrapper>
  );
};

export default OptionResult;
