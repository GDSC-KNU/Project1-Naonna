import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  & img {
    position: absolute;
    left: 15px;
  }
  & > h3 {
    justify-self: center;
    margin: 0;
    font-size: 16px;
  }
`;

const Menus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  & > div {
    width: 110px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #dddddd;
    padding-bottom: 10px;
    &[data-active='true'] {
      border-bottom: 3px solid #001f8e;
      color: #001f8e;
    }
  }
`;

const OptionHeader = ({ nowActive }: { nowActive: number }) => {
  return (
    <div style={{ width: '100%' }}>
      <TopHeader>
        <Link to="/">
          <img src="/image/ui-svg/toLeft.svg" alt="toLeft" />
        </Link>
        <h3>약속 정하기</h3>
      </TopHeader>
      <Menus>
        <div data-active={nowActive === 1}>날짜 선택</div>
        <div data-active={nowActive === 2}>위치 선택</div>
        <div data-active={nowActive === 3}>카테고리 선택</div>
      </Menus>
    </div>
  );
};

export default OptionHeader;
