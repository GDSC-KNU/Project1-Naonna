import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'components/resultCalendar';
import Warn from '../icon/Warning';
import Stack from 'components/Stack';
import Pill from 'components/Pill';
import { useOptionStore } from 'store/store';
import { useQuery } from 'react-query';
import { getDailyWeather } from 'api/getWeatherData';
import { postWeatherinfo } from 'api/postWeatherData';
import { RecommendResponseType } from 'types/apiTypes';

const CalendarPos = styled.div`
  margin-top: 44px;
  margin-bottom: 20px;
  margin-left: 19px;
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
const PillBtn = styled(Pill)`
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
  border-radius: 20px;
  border: none;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 7px;
  &:active {
    border: 2px solid #001f8e;
  }
`;
const ButtonText = styled.span`
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
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
`;
const OptionResult = () => {
  const navigate = useNavigate();
  const dateList = useOptionStore(state => state.dateList);
  const setDateList = useOptionStore(state => state.setDateList);
  const selectedArea = useOptionStore(state => state.selectedArea);
  const setSelectedArea = useOptionStore(state => state.setSelectedArea);
  const weatherOption = useOptionStore(state => state.weather);
  const setWeatherOption = useOptionStore(state => state.setWeather);
  const windOption = useOptionStore(state => state.wind);
  const setWind = useOptionStore(state => state.setWind);
  const { isLoading: weatherIsLoading, data: weatherData } = useQuery(
    ['dailyData', selectedArea],
    () => getDailyWeather(selectedArea),
  );
  const { isLoading: scoreIsLoading, data: scoreData } = useQuery(
    ['scoreData', selectedArea, weatherOption, windOption],
    () => postWeatherinfo(selectedArea, weatherOption, windOption),
  );
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const recommendedDateList: Date[] = [];
  const rankDateList: RecommendResponseType[] = [];
  if (typeof scoreData !== 'undefined' && !scoreIsLoading) {
    dateList.forEach(Date => {
      const index = (Date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
      const insert: RecommendResponseType = {
        date: Date,
        score: scoreData[index],
      };
      rankDateList.push(insert);
    });
    rankDateList.sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    });
    rankDateList.forEach(Date => {
      recommendedDateList.push(Date.date);
    });
  }
  const dateStringConvert = (date: Date) =>
    `${date.getMonth() + 1}월 ${date.getDate()}일`;
  const dateOnClick: React.MouseEventHandler<HTMLDivElement> = e => {
    const { target } = e;
    const closest = (target as HTMLDivElement).closest('button');
    if (!closest || closest.disabled) return;
    const month = +closest.dataset.month! - 1;
    const day = +closest.innerText;
    const clickDate = new Date(new Date().getFullYear(), month, day);
    console.log(clickDate);
    const btDay =
      (clickDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    clickDate.setMonth(month - 1);
    if (
      !weatherIsLoading &&
      typeof weatherData !== 'undefined' &&
      !scoreIsLoading
    ) {
      weatherData[btDay].location = selectedArea;
      weatherData[btDay].score = parseInt(scoreData![btDay].toFixed());
      navigate('./detail', { state: weatherData[btDay] });
    }
  };
  const rankOnClick: React.MouseEventHandler<HTMLDivElement> = e => {
    const { target } = e;
    const closest = (target as HTMLDivElement).closest('span');
    if (!closest) return;
    const index = parseInt(closest.title);
    const btDay =
      (recommendedDateList[index].getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24);
    if (
      !weatherIsLoading &&
      typeof weatherData !== 'undefined' &&
      !scoreIsLoading
    ) {
      weatherData[btDay].location = selectedArea;
      weatherData[btDay].score = parseInt(scoreData![btDay].toFixed());
      navigate('./detail', { state: weatherData[btDay] });
    }
  };
  const refresh = () => {
    setDateList([]);
    setSelectedArea('');
    setWeatherOption('clear');
    setWind(0);
  };
  return (
    <Stack
      className="stacks"
      style={{
        position: 'relative',
        width: 390,
        height: 784.06,
        background: '#FAFAFA',
        borderRadius: 30,
      }}
    >
      <CalendarPos>
        {scoreIsLoading ? (
          <div>Loading...</div>
        ) : (
          <Calendar
            rankDateList={recommendedDateList}
            dateOnClick={dateOnClick}
            style={{ alignSelf: 'center' }}
          />
        )}
      </CalendarPos>
      <Stack row style={{ marginLeft: 25 }}>
        <Warn />
        <InfoText>
          달력의 날짜를 클릭하면 그 날의 날씨 정보를 알 수 있습니다.
        </InfoText>
      </Stack>
      <span
        style={{
          marginLeft: 25,
          marginTop: 25,
          marginBottom: 25,
          fontSize: 22,
        }}
      >
        추천 날짜 선택
      </span>
      <Stack row style={{ marginLeft: 20 }}>
        {scoreIsLoading ? (
          <></>
        ) : (
          <PillBtn onClick={rankOnClick} style={{ backgroundColor: '#FFF7CC' }}>
            <ButtonText title="0">
              🥇 {dateStringConvert(recommendedDateList[0])}
            </ButtonText>
          </PillBtn>
        )}
        {scoreIsLoading || recommendedDateList.length < 2 ? (
          <></>
        ) : (
          <PillBtn onClick={rankOnClick} style={{ backgroundColor: '#F1F1F1' }}>
            <ButtonText title="1">
              🥈 {dateStringConvert(recommendedDateList[1])}
            </ButtonText>
          </PillBtn>
        )}
        {scoreIsLoading || recommendedDateList.length < 3 ? (
          <></>
        ) : (
          <PillBtn onClick={rankOnClick} style={{ backgroundColor: '#E5D6CC' }}>
            <ButtonText title="2">
              🥉 {dateStringConvert(recommendedDateList[2])}
            </ButtonText>
          </PillBtn>
        )}
      </Stack>
      <Footer>
        <FooterButton
          onClick={() => {
            refresh(), navigate('../option/1');
          }}
        >
          <FooterText>다시 추천 받기</FooterText>
        </FooterButton>
        <FooterButton>
          <FooterText
            onClick={() => {
              refresh(), navigate('/');
            }}
          >
            약속 잡기 완료
          </FooterText>
        </FooterButton>
      </Footer>
    </Stack>
  );
};
export default OptionResult;
