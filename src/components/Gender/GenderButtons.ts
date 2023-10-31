import styled from 'styled-components';

export const GenderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-height: 10rem;
  transform: translateY(-2rem);
  
  @media screen and (max-width : 600px) {
    gap : 1rem;
  }
`;