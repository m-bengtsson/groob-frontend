import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;

  &:active{
    color: inherit;
  }

  &:visited{
    color: inherit;
  }
}

`;

export const View = styled.div`
   display: flex;
`
