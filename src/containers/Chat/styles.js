import styled from 'styled-components';
import { BIG_STONE, LINK_WATER } from 'global/colors';
import { genericBorder } from 'global/styleHelpers';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100%;
  min-height: 0;
  width: 100%;
  margin: auto;
  overflow: auto;
  box-sizing: border-box;

  @media(min-width: 1280px) {
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2);
    margin: 1rem auto;
    max-width: 80%;
  }

  @media(min-width: 1280px) {
  }

  &::before {
    content: '';
    width: 100%;
    height: 10rem;
    background: ${LINK_WATER};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    ${({ backgroundImage }) => backgroundImage && `
      background-image: url('${backgroundImage}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 100% 2px;
      border-bottom: ${genericBorder(BIG_STONE, '2px')}
    `}
  }
`;