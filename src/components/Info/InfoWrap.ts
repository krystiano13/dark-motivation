import styled from 'styled-components';

export const InfoWrap = styled.div`
  width : 60%;
  height : 50%;
  max-width : 60%;
  
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 992px) {
    width : 85%;
    max-width: 85%;
  }
`;