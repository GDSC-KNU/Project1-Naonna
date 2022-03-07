import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
    width: 400px;
    height: 200px;
    align-items: center;
    border-radius: 35px;
    padding: 20px;
    border: 1.5px solid #a5a6f6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);   
`;

const CalendarHead = styled.div`
`;
const Head = styled.div`
`;
const Title = styled.span`
`;
const CalendarBody = styled.div`
`;
const Row = styled.div`
    display: flex;
    flexDirection: row;
`;
const Calendar=()=>{
    const [date, setDate] = useState<moment.Moment>(()=>moment());

    const handleDayClick = (current: moment.Moment) => setDate(current);
    const returnToday = ()=> setDate(moment());
    const jumpToMonth = (num:number) => (num ? setDate(date.clone().add(30,'day')) : setDate(date.clone().subtract(30,'day')));

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
                    
                    const isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                    const isGrayed = current.format('MM') !== today.format('MM') ? 'grayed' : '';

                    return(
                        <div className = {`box ${isSelected} ${isGrayed}`} key = {i} onClick= {()=> handleDayClick(current)}>
                            <button>{current.format('D')}</button>  
                        </div>
                    );
                    })}    
                </div>,
            );
        }
        return calendar;
    }

    return (
        <Wrapper>
            <CalendarHead>
                <Head>
                    <Title>{date.format('MMMM YYYY')}</Title>
                    <div className = "util-button">
                        <button onClick={()=>jumpToMonth(0)}>
                            <i className = 'fas fa-angle-left'></i>
                        </button>
                        <button onClick={returnToday}>{date.format('MM')}월</button>
                        <button onClick={()=>jumpToMonth(1)}>
                            <i className = "fas fa-angle-right"></i>    
                        </button>
                    </div>
                </Head>
            </CalendarHead>
            <CalendarBody>
                <Row>
                    {['일','월','화','수','목','금','토'].map((el) => (
                        <div className = "box" key = {el}>
                            <span className = "text">{el}</span>
                        </div>
                    ))}
                </Row>
                {generate()}
            </CalendarBody>
        </Wrapper>
    );
}
export default Calendar;