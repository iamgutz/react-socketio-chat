import styled from 'styled-components';
import { GREYSER } from 'global/colors';

export const ChatMessagesWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 0;
  overflow: auto;
  z-index: 1;
`;

export const ChatMessagesRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  background: ${GREYSER};
  overflow: hidden;
  > svg {
    width: 100%;
    height: auto;
  }
`;

export const Background = styled.figure`
${({ image }) => image && `
  background: url('${image}');
  background-size: 100%;
  background-position: center center;
`}
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.07;
  z-index: 0;

  @media(min-width: 768px) {
    background-size: 60%;
  }

  @media(min-width: 1024px) {
    background-size: 40%;
  }

  @media(min-width: 1280px) {
    background-size: 25%;
  }
`;