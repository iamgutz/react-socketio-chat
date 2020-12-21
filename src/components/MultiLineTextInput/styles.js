import { WHITE } from 'global/colors';
import styled from 'styled-components';

export const MultiLineTextInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1.3rem;
  width: 100%;
  box-sizing: border-box;
  background: ${WHITE};
  padding: 0.2rem 0.5rem;
  > textarea {
    border: none;
    resize: none;
    width: 100%;
    background: none;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: Arial;
    outline: none;
  }
`;