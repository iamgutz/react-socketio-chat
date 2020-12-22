import styled from 'styled-components';
import { ALABASTER, GALLERY, WHITE } from 'global/colors';
import { genericBorder } from 'global/styleHelpers';

export const TopNavWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem;
  justify-content: flex-end;
  box-sizing: border-box;
  border-bottom: ${genericBorder()};
  background: ${ALABASTER};
  > svg {
    height: 1.3rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

export const MenuWrap = styled.div`
  position: relative;
  width: fit-content;
`;

export const MenuDropDown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${WHITE};
  box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.4);
  border-radius: 3px;
  padding: 0.5rem 0;
  min-width: 10rem;
  max-width: 21rem;
  margin-top: 0.5rem;
  z-index: 100;

  > h5 {
    font-weight: normal;
    padding: 1rem 1.5rem;
  }
`;

export const MenuItemList = styled.ul`
  list-style: none;
  width: 100%;
`;

export const MenuItem = styled.li`
  padding: 1rem 1.5rem;
  cursor: pointer;
  &:hover {
    background: ${GALLERY};
  }
`;