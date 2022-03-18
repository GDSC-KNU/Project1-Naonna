import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
  width: 100%;
  background-color: #fff;
`;

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
    font-weight: 400;
  }
`;

const Menus = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  & > div {
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #dddddd;
    padding-bottom: 10px;
    &.active {
      border-bottom: 3px solid #001f8e;
      color: #001f8e;
    }
  }
`;

const OptionHeader = () => {
  return (
    <Header>
      <TopHeader>
        <Link to="/">
          <img src="/image/ui-svg/toLeft.svg" alt="toLeft" />
        </Link>
        <h3>약속 정하기</h3>
      </TopHeader>
      <Menus>
        <Link to="./1">
          <div className={window.location.href.endsWith('/1') ? 'active' : ''}>
            날짜 선택
          </div>
        </Link>
        <div className={window.location.href.endsWith('/2') ? 'active' : ''}>
          위치 선택
        </div>
        <div className={window.location.href.endsWith('/3') ? 'active' : ''}>
          카테고리 선택
        </div>
      </Menus>
    </Header>
  );
};

export default OptionHeader;
