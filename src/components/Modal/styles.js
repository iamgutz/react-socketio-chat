import { WHITE } from 'global/colors';
import { genericBorder } from 'global/styleHelpers';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.7);
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.2s ease-in;
  z-index: 1000;
`;

export const ModalDialog = styled.dialog`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 0;
  min-width: 10rem;
  min-height: 10rem;
  max-width: 90%;
  max-height: 90%;
  box-sizing: border-box;
  background: ${WHITE};
  border: none;
  border-radius: 7px;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.2s 0.2s ease-in;
  z-index: 1001;
`;

export const ModalTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
  border-bottom: ${genericBorder()};

  > div {
    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }

  > button {
    margin-left: auto;
    align-self: flex-start;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
  border-top: ${genericBorder()};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
  flex: 1;
`;