import styled from 'styled-components';
import { FIORD } from 'global/colors';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100%;
  min-height: 0;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  overflow: auto;
  box-sizing: border-box;

  @media(min-width: 1280px) {
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2);
    margin: 1rem auto;
  }

  &::before {
    content: '';
    width: 100%;
    height: 10rem;
    background: ${FIORD};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
`;