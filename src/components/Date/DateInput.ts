import styled from 'styled-components';
export const DateInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  outline: none;
  box-sizing: border-box;
  width : 16rem;
  font-size : 1.6rem;
  background-color: #0B0A0A;
  color : whitesmoke;
  border : solid whitesmoke 1px;
  padding : 0.75rem;
  margin-bottom: 2rem;
  
  @media screen and (max-width : 320px) {
    font-size : 1.2rem;
    padding : 0.5rem;
    width : 12rem;
  }
`;