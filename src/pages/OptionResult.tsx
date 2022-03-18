import React from 'react';
import styled from 'styled-components';
import Calendar from 'components/resultCalendar'
import Warn from "../icon/Warning";
// import Down from "../icon/Down";

const Wrapper = styled.div`
    position: relative;
    width: 390px;
    height: 784.06px;

    background: #FAFAFA;
    border-radius: 30px;
`;

const CalendarPos = styled.div`
    position: absolute;
    width: 328px;
    height: 316px;
    left: calc(50% - 328px/2);
    top: calc(50% - 316px/2 - 175.03px);

    background: #FFFFFF;
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
    left: calc(50% - 247px/2 - 30.5px);
    top: calc(50% - 13px/2 + 5.47px);
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
    color: #001F8E;
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
    left: calc(50% - 116px/2 - 98px);
    top: calc(50% - 22px/2 + 50.97px);
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
    left: calc(50% - 370px/2 + 4px);
    top: calc(50% - 38px/2 + 104.97px);
`;
const ButtonFirst = styled.button`
    display: flex;
    float : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    position: static;
    width: 100px;
    height: 38px;
    font-family: 'AppleSDGothicNeoB00';
    left: calc(50% - 100px/2 - 110px);
    top: calc(50% - 38px/2);
    background: #FFF7CC;
    border-radius: 20px;
    border:none;
/* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
    &:active{
        border: 2px solid #001F8E;
    };
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
    border:none;
    left: calc(50% - 100px/2);
    top: calc(50% - 38px/2);
    background: #F1F1F1;
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;
    &:active{
        border: 2px solid #001F8E;
    };
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
    left: calc(50% - 100px/2 + 110px);
    top: calc(50% - 38px/2);
    background: #E5D6CC;
    border-radius: 20px;
    border:none;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 10px;
    &:active{
        border: 2px solid #001F8E;
    };
`;
// const SelectText = styled.div`
// position: absolute;
// width: 130px;
// height: 22px;
// left: calc(50% - 116px/2 - 98px);
// top: calc(50% - 22px/2 + 166.97px);

// font-family: 'AppleSDGothicNeoB00';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 22px;
// /* identical to box height, or 110% */

// display: flex;
// align-items: center;
// letter-spacing: 0.22px;

// color: #000000;
// `;
// const SelectFrame = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     padding: 0px;
//     position: absolute;
//     width: 170px;
//     height: 40px;
//     left: calc(50% - 170px/2 - 71px);
//     top: calc(50% - 40px/2 + 221.97px);
// `;
// const SelectMonthButton = styled.button`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 13px;

//     position: static;
//     width: 81px;
//     left: calc(50% - 81px/2);
//     top: 0%;
//     bottom: 0%;

//     background: #FFFFFF;
//     border: 2px solid #B9B9B9;
//     box-sizing: border-box;
//     border-radius: 20px;

//     * Inside auto layout */

//     flex: none;
//     order: 0;
//     flex-grow: 1;
//     margin: 0px 0px;
// `;
// const SelectDayButton = styled.button`
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 13px;

// position: static;
// width: 81px;
// left: calc(50% - 81px/2 + 44.5px);
// top: 0%;
// bottom: 0%;

// background: #FFFFFF;
// border: 2px solid #B9B9B9;
// box-sizing: border-box;
// border-radius: 20px;

// /* Inside auto layout */

// flex: none;
// order: 1;
// flex-grow: 0;
// margin: 0px 8px;
// `;
// const SelectButtonText = styled.div`
//     position: static;
//     width: 29px;
//     height: 14px;
//     left: 13px;
//     top: 13px;
//     font-family: 'AppleSDGothicNeoB00';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 20px;
//     display: flex;
//     align-items: center;
//     color: #B9B9B9;
//     flex: none;
//     order: 0;
//     align-self: stretch;
//     flex-grow: 1;
// `;
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
    left: calc(50% - 320px/2 - 0.5px);
    top: calc(50% - 51px/2 + 299.47px);
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
    background: #FFFFFF;
    border-radius: 30px;
    border: 2px solid #001F8E;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 19px;
    &:active{
        background : #001F8E;
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
    &:active{
        color: #FFFFFF;
    }
`;
// const DownPos = styled.div`
// position: static;
// width: 16px;
// height: 16px;
// left: 52px;
// top: 12px;
// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
// `;
const OptionResult = () => {
    const dayArray : string[] = ["3월 27일", "3월 24일", "3월 20일"];
    const goAgain = () => {

        window.location.href = '/option';
    
    }
    return(
    <>
        <Wrapper>
        <CalendarPos>
            <Calendar />
        </CalendarPos>
        <Info>
            <Warn />
            <InfoText>달력의 날짜를 클릭하면 그 날의 날씨 정보를 알 수 있습니다.</InfoText>
        </Info>
        <CommandDay>추천 날짜 선택</CommandDay>
        <ButtonFrame>
            <ButtonFirst><ButtonText>🥇 {dayArray[0]}</ButtonText></ButtonFirst>
            <ButtonSecond><ButtonText>🥈 {dayArray[1]}</ButtonText></ButtonSecond>
            <ButtonThird><ButtonText>🥉 {dayArray[2]}</ButtonText></ButtonThird>
        </ButtonFrame>
        {/* <SelectText>날짜 직접 입력</SelectText>
        <SelectFrame>
            <SelectMonthButton>
                <SelectButtonText>3월</SelectButtonText>
                <DownPos><Down/></DownPos>
            </SelectMonthButton>
            <SelectDayButton>
                <SelectButtonText>18일</SelectButtonText>
                <DownPos><Down/></DownPos>
            </SelectDayButton>
        </SelectFrame> */}
        <Footer>
            <FooterButton onClick={()=>goAgain()}>
                <FooterText>다시 추천 받기</FooterText>
            </FooterButton>
            <FooterButton>
                <FooterText>약속 잡기 완료</FooterText>
            </FooterButton>
        </Footer>
        </Wrapper>
    </>
    )
}

export default OptionResult;