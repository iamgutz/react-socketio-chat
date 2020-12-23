import styled, { css, keyframes } from 'styled-components';
import {
  ALABASTER, CARNATION, DISCO, GALLERY, RED_ORANGE, TUNDORA, WHITE,
} from 'global/colors';
import { genericBorder } from 'global/styleHelpers';

const sideBounce = keyframes`
  0% {
    transform: translateX(-120%);
  }
  65% {
    transform: translateX(-120%);
  }
  75% {
    transform: translateX(120%);
  }
  85% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(120%);
  }
  85% {
    transform: translateY(120%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const logoAnimationIn = css`
  ${sideBounce} 1.8s ease-out forwards;
`;

const formAnimationIn = css`
  ${slideUp} 1.8s ease-out forwards;
`;

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
    opacity: 0;
    transition: opacity .7s .5s ease-in-out;
  }

  > svg {
    margin-bottom: 2rem;
    width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity .7s ease-in-out;
  }

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    transform: translateY(120%);
    opacity: 0;
    transition: opacity .4s 1.5s ease-in;
  }

  ${({ animateIn }) => animateIn && css`
    > h1 {
      opacity: 1;
    }
    > svg {
      opacity: 1;
    }
    > form {
      animation: ${formAnimationIn};
      opacity: 1;
    }
  `}

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
  transform: translateX(-120%);
  opacity: 0;
  transition: opacity .4s 1.1s ease-in;
  > svg {
    width: 100%;
    height: auto;
  }
  ${({ animateIn }) => animateIn && css`
    animation: ${logoAnimationIn};
    opacity: 1;
  `}
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