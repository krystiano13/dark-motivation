import styled from 'styled-components';

export const InfoText = styled.h2`
  text-align: center;
  margin : 0;
  width : 100%;
  max-width: 100%;
  font-size : 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  
  @media (max-width : 300px) {
    font-size : 1.1rem;
  }

  @media (min-width : 2400px) {
    font-size : 3rem;
    margin-bottom : 4rem;
  }

  @media (min-width : 3200px) {
    font-size : 4rem;
    margin-bottom : 6rem;
  }

  @media (max-width : 400px) and (min-width : 301px) {
    font-size : 1.4rem;
  }

  @media (max-width : 600px) and (min-width : 401px) {
    font-size : 1.6rem;
  }
`;