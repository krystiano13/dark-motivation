import styled from "styled-components";

export const ResultModal = styled.div`
  width : 50%;
  height : 50%;
  border: solid whitesmoke 2px;
  background-color: #0B0A0A;
  
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

export const ResultButton = styled.button`
  color : whitesmoke;
  background-color: transparent;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size : 1.6rem;
  cursor: pointer;
  margin-right : 1rem;
  
`;

export const ResultText = styled.p`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size : 1.5rem;
  max-width: 80%;
  
  @media screen and (max-width: 992px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width : 300px) {
    font-size : 0.9rem;
    max-width: 85%;
  }

  @media screen and (max-width : 600px) and (min-width : 301px) {
    font-size : 1.1rem;
    max-width: 85%;
  }

  @media screen and (max-width : 1100px) and (min-width : 800px) {
    font-size : 1.2rem;
    max-width: 85%;
  }
`;
