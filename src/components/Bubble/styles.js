import styled, { css, keyframes } from 'styled-components';
import {
  WHITE, YELLOW, DISCO, RED_ORANGE,
} from 'global/colors';

const bubbleTipSize = 10;

const expandBounce = keyframes`
  0% {
    transform: translateY(0) scaleY(0);
  }
  30% {
    transform: translateY(75%) scaleY(0.6);
  }
  75% {
    transform: translateY(100%);
  }
  85% {
    transform: translateY(50%) scaleY(1.25);
  }
  100% {
    transform: scaleY(1);
  }
`;

const animationIn = css`
  ${expandBounce} 0.3s ease-out forwards;
`;

export const bubbleColors = {
  primary: 'primary',
  default: 'default',
};

const primaryColor = css`
  background: ${DISCO};
  color: ${WHITE};
  &::after {
    border-color: transparent transparent ${DISCO} transparent;
  }
`;

const defaultColor = css`
  background: ${RED_ORANGE};
  color: ${WHITE};
  &::after {
    border-color: transparent transparent ${RED_ORANGE} transparent;
  }
`;

const colors = {
  [bubbleColors.default]: defaultColor,
  [bubbleColors.primary]: primaryColor,
};

export const BubbleRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem 0.8rem 1rem;
`;

export const BubbleWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  min-width: 25%;
  width: fit-content;
  min-height: 22px;
  height: fit-content;
  position: relative;
  background: #000000;
  color: #FFFFFF;
  font-family: Arial;
  font-size: 0.8125rem;
  border-radius: 10px 10px 10px 0px;
  padding: 0.8rem;
  margin: 0px ${bubbleTipSize}px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);
  word-break: break-all;
  letter-spacing: 1px;

  transform: translateY(100%) scale(0);
  ${({ visible }) => visible && css`
    animation: ${animationIn};
  `}

  @media(min-width: 1024px) {
    max-width: 40%;
  }

  a {
    color: ${YELLOW};
  }

  > h4 {
    margin-bottom: 0.3rem;
    font-size: 0.93rem;
  }

  > time {
    margin-top: 0.3rem;
    font-size: 0.7rem;
    text-align: right;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-width: 0 0 ${bubbleTipSize}px ${bubbleTipSize}px;
    border-color: transparent transparent #000000 transparent;
    bottom: 0;
    left: -${bubbleTipSize}px;

    ${({ right }) => right && `
      border-width: 0 ${bubbleTipSize}px ${bubbleTipSize}px 0;
      right: -${bubbleTipSize}px;
      left: unset;
    `}
  }

  ${({ right }) => right && `
    margin-left: auto;
    border-radius: 10px 10px 0px 10px;
  `}

  ${({ color }) => color && colors[color]}
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ImageWrap = styled.a`
  min-height: 3rem;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  margin-bottom: 1rem;
`;