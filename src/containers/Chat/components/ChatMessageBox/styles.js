import styled from 'styled-components';
import { GALLERY } from 'global/colors';

export const ChatMessageBoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  background: ${GALLERY};
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  > button {
    margin-left: 0.5rem;
    align-self: flex-end;
  }
`;