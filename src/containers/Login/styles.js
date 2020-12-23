import {
  ALABASTER, CARNATION, DISCO, GALLERY, RED_ORANGE, TUNDORA, WHITE,
} from 'global/colors';
import { genericBorder } from 'global/styleHelpers';
import styled from 'styled-components';

export const LoginWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: auto;
  background: ${WHITE};
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2);

  > h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${DISCO};
  }

  > svg {
    margin-bottom: 2rem;
    width: 100%;
    height: auto;
  }

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90%;
  }

  @media(max-height: 450px) {
    > svg {
      display: none;
    }
  }

  @media(min-width: 768px) {
    max-width: 95%;
    > svg {
      width: 75%;
    }

    > form {
      max-width: 75%;
    }
  }

  @media(min-width: 1280px) {
    max-width: 600px;
    height: auto;
    border-radius: 7px;
  }
`;

export const LogoWrap = styled.div`
  width: 100%;
  max-width: 200px;
  > svg {
    width: 100%;
    height: auto;
  }
`;

export const LoginField = styled.input`
  border: ${genericBorder(GALLERY, '2px')};
  outline: none;
  border-radius: 1.3rem;
  background: ${ALABASTER};
  width: 100%;
  box-sizing: border-box;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  font-family: Arial;
  color: ${TUNDORA};
  text-align: center;
  margin-bottom: 1rem;
`;

export const LoginButton = styled.button`
  border: none;
  outline: none;
  background: ${CARNATION};
  font-size: 1.5rem;
  color: ${WHITE};
  padding: 0.5rem 1rem;
  border-radius: 7px;
`;

export const ErrorMessage = styled.p`
  color: ${RED_ORANGE};
  font-size: 1.2rem;
  margin-top: 1rem;
`;