import styled from "styled-components";

export const ResultModal = styled.div`
  width : 50%;
  height : 50%;
  border: solid whitesmoke 2px;
  
  position : fixed;
  
  display : flex;
  flex-direction: column;
  
  @media screen and (max-width: 992px) {
    width : 90%;
  }
`;

export const ResultBar = styled.div`
  width : 100%;
  height : 15%;
  display : flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: solid whitesmoke 2px;
`;

export const ResultInfo = styled.div`
  width : 100%;
  height : 85%;
  
  display : flex;
  justify-content: center;
  align-items: center;
`;
