import styled from 'styled-components';

export const ComponentContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;

export const TopTitle = styled.div`
  box-sizing: border-box;
  padding: 15px;
  margin-top: 33px;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  font-size: 16px;
`;

export const Divider = styled.div`
  height: 17px;
`;

export const BottomButton = styled.button`
  width: 195px;
  height: 56px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001f8e;
  color: #fff;
  font-size: 18px;
  margin: 45px 0px;
  border: none;
  &:disabled {
    background-color: #95a5a6;
  }
`;

export const AdditionalExplain = styled.div`
  display: flex;
  font-size: 10px;
  color: #001f8e;
  .image-container {
    width: 8px;
    height: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
