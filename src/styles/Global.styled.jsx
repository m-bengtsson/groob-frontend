import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --black: #242424;
  --medium-grey: #B7B7B7;
  --light-grey: #e8e8e8;
  --primary: #C99C99;

  --error-background: #f9e7f1;
	--error-text: #a82564;
	--error-border: #d01c71;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--black)
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
	align-items: center;
`;
