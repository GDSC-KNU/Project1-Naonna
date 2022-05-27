/* eslint-disable require-jsdoc */
import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import styled from 'styled-components';
import { useOptionStore } from 'store/store';
import { useNavigate } from 'react-router-dom';
import { DeckProps } from 'types/component-props';
import ResultDetail from './ResultDetail';

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0px;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;
const Buttons = styled.div`
  display: flex;
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
  background: #ffffff;
  border-radius: 30px;
  border: 2px solid #001f8e;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 19px;
  &:active {
    background: #001f8e;
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
  &:active {
    color: #ffffff;
  }
  &:hover {
    cursor: pointer;
  }
`;

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({
  x: 0,
  rot: -10 + Math.random() * 20,
  scale: 1.5,
  y: -1000,
});
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX (20deg) rotateY(${r / 10}deg) scale(${s})`;

const DeckDiv = styled(animated.div)`
  position: absolute;
  width: 300px;
  height: 200px;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    touch-action: none;
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 45vh;
    max-width: 300px;
    height: 85vh;
    max-height: 570px;
    will-change: transform;
    border-radius: 10px;
  }
`;

function Deck({ cards }: DeckProps) {
  const setDateList = useOptionStore(state => state.setDateList);
  const setSelectedArea = useOptionStore(state => state.setSelectedArea);
  const setWeatherOption = useOptionStore(state => state.setWeather);
  const setWind = useOptionStore(state => state.setWind);
  const navigate = useNavigate();
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [springs, api] = useSprings(cards.length + 1, i => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2; // If you flick hard enough it should trigger the card to fly out
      if (!active && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start(i => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = active ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start(i => to(i));
        }, 600);
    },
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  // eslint-disable-next-line no-unused-vars
  const refresh = () => {
    setDateList([]);
    setSelectedArea('');
    setWeatherOption('clear');
    setWind(0);
  };
  return (
    <>
      <DeckDiv
        style={{
          x: springs[0].x,
          y: springs[0].y,
        }}
      >
        <animated.div
          {...bind(0)}
          style={{
            transform: interpolate([springs[0].rot, springs[0].scale], trans),
          }}
        >
          <Footer key={cards.length}>
            <Buttons>
              <FooterButton
                onClick={() => {
                  refresh(), navigate('../option/1');
                }}
              >
                <FooterText>다시 추천 받기</FooterText>
              </FooterButton>
              <FooterButton>
                <FooterText
                  onClick={() => {
                    refresh(), navigate('/');
                  }}
                >
                  약속 잡기 완료
                </FooterText>
              </FooterButton>
            </Buttons>
            <span>
              추천받았던 날짜를 확인하려면
              <br />이 페이지를 스와이프 하세요!
            </span>
          </Footer>
        </animated.div>
      </DeckDiv>
      {springs.slice(1, -1).map(({ x, y, rot, scale }, i) => (
        <DeckDiv className="deckdiv" key={i + 1} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i + 1)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <ResultDetail {...cards[i + 1]} />
          </animated.div>
        </DeckDiv>
      ))}
    </>
  );
}

export default Deck;
