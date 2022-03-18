import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Arrow from '../icon/Arrow';
import { CalendarProps } from 'types/component-props';
require('typeface-ibm-plex-sans');

const Head = styled.div`
  position: absolute;
  width: 142px;
  height: 32px;
  left: calc(50% - 142px / 2);
  top: 18px;
`;
const CalendarBody = styled.div`
  position: absolute;
  width: 90%;
  height: 200px;
  left: 30px;
  top: 92px;
`;
const Row = styled.div`
  position: absolute;
  width: 90%;
  height: 16px;
  left: 32px;
  top: 60px;
`;
const Week = styled.div`
  float: left;
`;
const Day = styled.div`
  width: 40px;
  height: 16px;
  top: 60px;
  bottom: 240px;
  display: flex;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
const DayButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  margin-right: 8px;
  margin-bottom: 1.5px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  &:disabled {
    color: #dddddd;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    cursor: pointer;
    background: #ccd2e8;
  }
  &.selected {
    background-color: #ccd2e8;
  }
`;
const Month = styled.button`
  position: absolute;
  height: 24px;
  width: 118px;
  left: 42px;
  text-align: center;
  border: none;
  background-color: transparent;
  top: calc(50% - 25px / 2);
  font-family: AppleSDGothicNeoB00;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.12px;
`;
const Left = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  transform: scaleX(-1);
  width: 28px;
  height: 28px;
  left: 4px;
  top: calc(50% - 28px / 2);
  font-weight: bold;
  color: #001f8e;
  &:hover {
    cursor: pointer;
  }
`;
const Right = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  width: 28px;
  height: 28px;
  right: 4px;
  top: calc(50% - 28px / 2);
  font-weight: bold;
  color: #001f8e;
  &:hover {
    cursor: pointer;
  }
`;
const Today = styled.div`
  position: absolute;
  width: 27px;
  height: 0px;
  margin-left: 5px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 22px;
  /* or 275% */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.22px;
  &.today {
    color: #001f8e;
  }
`;
const Calendar = ({ dateList: days, setDateList: setDays }: CalendarProps) => {
  const [date, setDate] = useState<moment.Moment>(() => moment());
  const returnToday = () => setDate(moment());
  const jumpToMonth = (num: number) =>
    num
      ? setDate(date.clone().add(30, 'day'))
      : setDate(date.clone().subtract(30, 'day'));

  const generate = () => {
    const today = date;
    const startWeek = today.clone().startOf('month').week();
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();
    const calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              const current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');
              const isToday =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'today'
                  : '';
              const isGrayed = current.format('MM') !== today.format('MM');
              return (
                <Week key={i}>
                  <DayButton disabled={isGrayed}>
                    {current.format('D')}
                  </DayButton>
                  {isToday && <Today className={`text ${isToday}`}>오늘</Today>}
                </Week>
              );
            })}
        </div>,
      );
    }
    return calendar;
  };

  const calendar = useMemo<JSX.Element[]>(() => generate(), [date]);

  useEffect(() => {
    console.log(days);
  }, [days]);

  useEffect(() => console.log('rerendered!!'));

  return (
    <>
      <Head>
        <Left onClick={() => jumpToMonth(0)}>
          <Arrow />
        </Left>
        <Month onClick={returnToday}>
          {date.format('YYYY')}.{date.format('M')}
        </Month>
        <Right onClick={() => jumpToMonth(1)}>
          <Arrow />
        </Right>
      </Head>
      <Row>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(el => (
          <Week key={el}>
            <Day>{el}</Day>
          </Week>
        ))}
      </Row>
      <CalendarBody
        onClick={e => {
          const target = e.target as HTMLElement;
          const closest = target.closest('button');
          if (!closest) return;
          const targetDay = new Date(
            date.format('YYYY/M/') + closest.textContent,
          );
          console.log(targetDay);
          if (closest) {
            if (days.some(day => day.getTime() === targetDay.getTime())) {
              setDays(days =>
                days.filter(day => day.getTime() !== targetDay.getTime()),
              );
            } else {
              setDays(days => [...days, targetDay]);
            }
            closest.classList.toggle('selected');
            console.log(closest);
          }
        }}
      >
        {calendar}
      </CalendarBody>
    </>
  );
};
export default Calendar;
