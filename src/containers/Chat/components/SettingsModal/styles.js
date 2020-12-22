import styled from 'styled-components';
import { CERISE_RED, WHITE } from 'global/colors';

export const SettingsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SettingsRow = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  flex-wrap: wrap;

  > h5 {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  > div {
    display: flex;
    width: 100%;
  }
`;

export const ResetButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  transition: background .2s ease-in-out, color .2s ease-in-out;
  &:hover {
    background: ${CERISE_RED};
    color: ${WHITE};
  }
`;