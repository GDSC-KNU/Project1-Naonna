import React, {useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
require('typeface-ibm-plex-sans');

const Head = styled.div`
    position: absolute;
    width: 142px;
    height: 32px;
    left: calc(50% - 142px/2);
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
    float:left;
`;
const Day = styled.div`
    width : 40px;
    height : 16px;
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
    width : 32px;
    height : 32px;
    display: flex;
    margin-right : 8px;
    margin-bottom : 1.5px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border:none;
    background-color:transparent;
    border-radius: 50%;
    &.grayed {
        color :#DDDDDD;
    }
    &.selectedFirst{
        background: rgba(255, 214, 0, 0.2);
    }
    &.selectedSecond{
        background: rgba(185, 185, 185, 0.2);
    }
    &.selectedThird{
        background: rgba(123, 52, 0, 0.2);
    }
    &:active{
        cursor : pointer;
    }
`;
const Month = styled.button`
    position: absolute;
    height: 24px;
    width: 118px;
    left : 42px;
    text-align: center;
    border:none;
    background-color:transparent;
    top: calc(50% - 25px/2);
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
    position: absolute;
    width: 27px;
    height: 0px;
    margin-left : 6px;
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
    color: transparent;
    &.selected{
        color: #001F8E;
    }
`;
const Calendar=()=>{
    const [date, setDate] = useState<moment.Moment>(()=>moment());
    const returnToday = ()=> setDate(moment());
    const dayArray : string[] = ["2022 3 27", "2022 3 24", "2022 3 20"];

    const generate=()=>{
        const today = date;
        const nextMonth = date.clone().add(30,'day').week();
        const startWeek = today.week();
        // const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
        const calendar = [];
        for(let week = startWeek; week<=nextMonth; week++){
            calendar.push(
                <div className = "row" key = {week}>
                    {Array(7)
                    .fill(0)
                    .map((n,i)=>{
                        const current = today
                        .clone()
                        .week(week)
                        .startOf('week')
                        .add(n+i, 'day');
                    const isSelectedFirst = dayArray[0] === current.format('YYYY M D') ? 'selectedFirst' : '';
                    const isSelectedSecond = dayArray[1] === current.format('YYYY M D') ? 'selectedSecond' : '';
                    const isSelectedThird = dayArray[2] === current.format('YYYY M D') ? 'selectedThird' : '';
                    const isBefored = current.clone().subtract(-1,'day').isBefore(today) ? 'grayed' : '';
                    const isOvered = current.isAfter(today.clone().add(30,'day')) ? 'grayed':'';
                    const isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                    return(
                        <Week key = {i}>
                            <DayButton className = {`box ${isBefored}${isOvered}${isSelectedFirst}${isSelectedSecond}${isSelectedThird}`} disabled = {isBefored == 'grayed' || isOvered == 'grayed'}>{current.format('D')}</DayButton> 
                            <Today className = {`text ${isSelected}`}>오늘</Today>
                        </Week>
                    );
                    })}     
                </div>
            );
        }
        return calendar;
    }

    return (
        <>
            <Head>
                <Month onClick={returnToday}>{date.format('YY')}.{date.format('M')}~{date.clone().add(30,'day').format('M')}</Month>
            </Head>
            <Row>
                {['SUN','MON','TUE','WED','THU','FRI','SAT'].map((el) => (
                    <Week key = {el}>
                        <Day>{el}</Day>
                    </Week>
                ))}
            </Row>
            <CalendarBody>
                {generate()}
            </CalendarBody>
        </>
    );
}
export default Calendar;