import styled from 'styled-components';

export const HomeWrap = styled.div`
  width : 50%;
  height : 50%;
  border-right: whitesmoke solid 0.6rem;
  padding : 1rem;
  
  @media screen and (max-width : 992px) {
    width : 90%;
    border-right: whitesmoke solid 0.4rem;
    padding : 0.75rem;
    margin-top : 25%;
  }
`;