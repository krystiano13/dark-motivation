import styled from 'styled-components';

type Props = {
    filled : boolean;
}

export const BoxItem = styled.div<Props>`
  width : 0.75rem;
  height : 0.75rem;
  display : block;
  border: solid whitesmoke 1px;
  opacity : 0.5;
  
  ${({filled}) => filled && `
    background-color: whitesmoke;
  `}}
`;