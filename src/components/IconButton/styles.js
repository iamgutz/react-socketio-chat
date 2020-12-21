import styled from 'styled-components';
import { ALTO, GRAY } from 'global/colors';

export const IconButtonWrap = styled.button`
  border-radius: 50%;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  background: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover, &:active {
    background: ${ALTO};
  }

  > svg {
    color: ${GRAY};
    width: 100%;
    height: auto;
  }
`;