import styled from 'styled-components';

export const HomeButton = styled.button`
  position: relative;
  background-color: transparent;
  color: whitesmoke;
  cursor: pointer;
  font-size : 1.25rem;
  border : solid whitesmoke 2px;
  width : 25%;
  height : 6vh;
  min-width : 12rem;
  min-height : 3.5rem;
  transition: 250ms;
  z-index: 1000;
  opacity : 0;
  
  @media (max-width : 300px) {
    min-width : 7rem;
    min-height : 2.75rem;
    margin-top : 1rem;
    font-size : 1rem;
  }

  @media (max-width : 600px) and (min-width : 301px) {
    min-width : 9rem;
    min-height : 3rem;
    margin-top : 1.25rem;
    font-size : 1rem;
  }
  
  &::before {
    content: '';
    background-color: whitesmoke;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    transition: transform 250ms, border-radius 250ms;
    position: absolute;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: top;
  }
  
  &:hover {
    color : #0B0A0A;
  }
  
  &:hover::before {
    transform: scaleY(1);
    border-radius: 0;
  }
`;