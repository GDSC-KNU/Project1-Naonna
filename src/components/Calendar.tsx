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
    &:hover{
        cursor : pointer;
    }
    &:active{
        cursor : pointer;
        background: #CCD2E8;
    }
`;
const Month = styled.button`
    position: absolute;
    height: 24px;
    width: 118px;
    left : 40px;
    text-align: center;
    border:none;
    background-color:transparent;
    top: calc(50% - 20px/2);
    font-family: AppleSDGothicNeoB00;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.12px;
`
const Left = styled.button`
    position: absolute;
    border:none;
    background-color:transparent;
    width: 28px;
    height: 28px;
    left: 4px;
    top: calc(50% - 28px/2);
    font-weight: bold;
    color : #001F8E;
    &:hover{
        cursor : pointer;
    }
`
const Right = styled.button`
    position: absolute;
    border:none;
    background-color:transparent;
    width: 28px;
    height: 28px;
    right: 4px;
    top: calc(50% - 28px/2);
    font-weight: bold;
    font-color : #001F8E;
    &:hover{
        cursor : pointer;
    }
`
const Calendar=()=>{
    const [date, setDate] = useState<moment.Moment>(()=>moment());
    const returnToday = ()=> setDate(moment());
    const jumpToMonth = (num:number) => (num ? setDate(date.clone().add(30,'day')) : setDate(date.clone().subtract(30,'day')));
    const [days, setDays] = useState<String[]>([]);

    const generate=()=>{
        const today = date;
        const startWeek = today.clone().startOf('month').week();
        const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
        const calendar = [];
        for(let week = startWeek; week<=endWeek; week++){
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
                    const isGrayed = current.format('MM') !== today.format('MM') ? 'grayed' : '';

                    return(
                        <Week key = {i}>
                            {/* <DayButton style = {{color : color}} onClick = {()=>changeColor()}>{current.format('D')}</DayButton>  */}
                            <DayButton className = {`box ${isGrayed}`} disabled = {isGrayed == 'grayed'}>{current.format('D')}</DayButton> 
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
                <Left onClick={()=>jumpToMonth(0)}>
                    &lt;
                </Left>
                <Month onClick={returnToday}>{date.format('YYYY')}.{date.format('M')}</Month>
                <Right onClick={()=>jumpToMonth(1)}>
                    &gt;
                </Right>
            </Head>
            <Row>
                {['SUN','MON','TUE','WED','THU','FRI','SAT'].map((el) => (
                    <Week key = {el}>
                        <Day>{el}</Day>
                    </Week>
                ))}
            </Row>
            <CalendarBody onClick={e=>{
                const target = e.target as HTMLElement;
                const closest = target.closest('button');
                const targetDay = date.format("YYYY M ") + closest?.textContent;
                console.log(targetDay);
                if(closest){
                    if(days.includes(targetDay)){
                        setDays(days.filter(day => day != targetDay));
                        closest.style.background = "transparent";
                    }
                    else{
                        const day : string = targetDay;
                        setDays(days.concat(day));
                        closest.style.background = "#CCD2E8";
                    }
                }
            }}>
                {generate()}
            </CalendarBody>
        </>
    );
}
export default Calendar;