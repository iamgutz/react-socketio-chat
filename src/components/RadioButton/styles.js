import styled from 'styled-components';
import { RED_ORANGE } from 'global/colors';

export const RadioButtonWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  > input {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    cursor: pointer;
    opacity: 0;
  }
  > svg {
    font-size: 1.5rem;
    color: ${RED_ORANGE};
  }
  > label {
    font-size: 0.8175rem;
    padding: 0 1rem 0 0.2rem;
  }
`;