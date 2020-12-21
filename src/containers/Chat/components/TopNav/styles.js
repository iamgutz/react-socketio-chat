import styled from 'styled-components';
import { GALLERY } from 'global/colors';
import { genericBorder } from 'global/styleHelpers';

export const TopNavWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem;
  justify-content: flex-end;
  box-sizing: border-box;
  border-bottom: ${genericBorder()};
`;

export const MenuWrap = styled.div`
  position: relative;
  width: fit-content;
`;

export const MenuDropDown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.4);
  padding: 0.5rem 0;
  min-width: 10rem;
  max-width: 21rem;
  margin-top: 0.5rem;

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