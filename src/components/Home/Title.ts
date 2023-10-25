import styled from 'styled-components';

export const Title = styled.h1`
  font-size : 5rem;
  font-weight: 600;
  text-align: right;
  margin : 0;
  max-width: 90%;
  margin-left : 5%;

  @media screen and (min-width : 1600px) {
    font-size : 7rem;
  }

  @media screen and (max-width : 992px) {
    font-size : 3.8rem;
    max-width: 80%;
    margin-left : 10%;
  }
`;