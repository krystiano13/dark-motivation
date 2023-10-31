import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 600;
  text-align: right;
  margin : 0;
  font-size : 7rem;
  max-width: 90%;
  margin-left : 5%;

  @media (min-width : 2400px) {
    font-size : 11rem;
    max-width: 85%;
    margin-left : 10%;
  }

  @media (min-width : 3200px) {
    font-size : 14rem;
    max-width: 85%;
    margin-left : 10%;
  }

  @media (max-width : 992px) {
    font-size : 5rem;
    max-width: 85%;
    margin-left : 10%;
  }
  

  @media (max-width : 600px) {
    font-size : 4rem;
    max-width: 85%;
    margin-left : 10%;
  }

  @media (min-width: 320px) and (max-width: 450px) {
    font-size : 3.35rem;
    max-width: 85%;
    margin-left : 10%;
  }

  @media (max-width : 300px) {
    font-size : 2.4rem;
    max-width: 85%;
    margin-left : 10%;
  }
`;