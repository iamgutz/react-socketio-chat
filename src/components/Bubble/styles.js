import styled from 'styled-components';

const bubbleTipSize = 10;

export const BubbleRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem 0.8rem 1rem;
`;

export const BubbleWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 80%;
  min-width: 25%;
  width: fit-content;
  min-height: 22px;
  position: relative;
  background: #000000;
  color: #FFFFFF;
  font-family: Arial;
  border-radius: 10px 10px 10px 0px;
  padding: 0.8rem;
  margin: 0px ${bubbleTipSize}px;

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
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 75%;
  object-fit: cover;
  object-position: center;
`;