import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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
  .row {
    display: flex;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  margin-bottom: 1.5px;
  font-family: IBM Plex Sans;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  &.selected {
    background-color: #ccd2e8;
  }
  &.first {
    background: rgba(255, 214, 0, 0.2);
  }
  &.second {
    background: rgba(185, 185, 185, 0.2);
  }
  &.third {
    background: rgba(123, 52, 0, 0.2);
  }
  &:disabled {
    color: #dddddd;
  }
  &:active {
    cursor: pointer;
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
const Today = styled.div`
  width: 27px;
  margin-left: 6px;
  font-family: 'AppleSDGothicNeoB00';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.22px;
  color: #001f8e;
`;

const Calendar = ({ dateList, rankDateList, dateOnClick }: CalendarProps) => {
  const [date, setDate] = useState<moment.Moment>(() => moment());
  const returnToday = () => setDate(moment());

  const generate = useCallback(() => {
    const today = date;
    const nextMonth = date.clone().add(30, 'day').week();
    const startWeek = today.week();
    const calendar = [];
    for (let week = startWeek; week <= nextMonth; week++) {
      calendar.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((_, i) => {
              let selected = '';
              const current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(i, 'day');
              rankDateList &&
                rankDateList.forEach((date, idx) => {
                  const list = ['first', 'second', 'third'];
                  if (date.getTime() === current.toDate().getTime()) {
                    selected = list[idx];
                  }
                });
              const isInvalid =
                current.clone().subtract(-1, 'day').isBefore(today) ||
                current.isAfter(today.clone().add(30, 'day'));
              const isSelected =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';
              return (
                <DayButton
                  key={i}
                  className={`${selected} ${
                    dateList?.some(
                      date => date.getDate() + '' == current.format('D'),
                    )
                      ? 'selected'
                      : ''
                  }`}
                  disabled={isInvalid}
                  data-month={current.month() + 1}
                >
                  <span>{current.format('D')}</span>
                  {isSelected && <Today>오늘</Today>}
                </DayButton>
              );
            })}
        </div>,
      );
    }
    return calendar;
  }, [date]);

  const calendar = useMemo<JSX.Element[]>(() => generate(), [date]);

  return (
    <>
      <Head>
        <Month onClick={returnToday}>
          {date.format('YY')}.{date.format('M')}~
          {date.clone().add(30, 'day').format('M')}
        </Month>
      </Head>
      <Row>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(el => (
          <Week key={el}>
            <Day>{el}</Day>
          </Week>
        ))}
      </Row>
      <CalendarBody onClick={dateOnClick}>{calendar}</CalendarBody>
    </>
  );
};
export default Calendar;
