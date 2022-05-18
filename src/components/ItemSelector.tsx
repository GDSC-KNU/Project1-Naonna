import React from 'react';
import styled from 'styled-components';
import { ItemSelectorProps } from 'types/component-props';

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  max-height: 300px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #aaa;
  }
  &::-webkit-scrollbar-thumb {
    background: #000;
  }
`;
const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  padding: 8px 21px;
  border: 2px solid ${(props: any) => (props.selected ? '#001F8E' : '#dbdbdb')};
  color: ${(props: any) => (props.selected ? '#001F8E' : '#dbdbdb')};
  margin-right: 15px;
  margin-bottom: 10px;
  &:hover {
    border-color: #001f8e;
    color: #001f8e;
  }
  &[data-selected='true'] {
    border-color: #001f8e;
    color: #001f8e;
  }
`;

const ItemSelector = ({
  title,
  items,
  selected,
  setSelected,
}: ItemSelectorProps) => {
  const itemClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const eventTarget = e.target as HTMLElement;
    setSelected(eventTarget.innerText);
  };
  return (
    <Container>
      <Title>{title}</Title>
      <ItemContainer>
        {items ? (
          items?.map((item, idx) => (
            <Item
              key={idx}
              data-selected={item.trim() === selected.trim()}
              onClick={itemClickHandler}
            >
              {item}
            </Item>
          ))
        ) : (
          <span>상위 주소를 선택해 주세요..!</span>
        )}
      </ItemContainer>
    </Container>
  );
};

export default ItemSelector;
