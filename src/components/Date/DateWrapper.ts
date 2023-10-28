import styled from 'styled-components';
export const DateWrapper = styled.div`
  width : 50%;
  height : 50%;
  
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width : 992px) {
    width : 90%;
  }
`;