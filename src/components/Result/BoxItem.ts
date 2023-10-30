import styled from 'styled-components';

type Props = {
    filled : boolean;
}

export const BoxItem = styled.div<Props>`
  width : 0.5rem;
  height : 0.5rem;
  display : block;
  border: solid whitesmoke 1px;
  
  ${({filled}) => filled && `
    background-color: whitesmoke;
  `}}
`;