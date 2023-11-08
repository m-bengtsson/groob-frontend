import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Akshar';
  src: url(https://fonts.gstatic.com/s/akshar/v9/Yq6I-LyHWTfz9rGoqDaUbHvhkAUsSXYF-9eS9g.woff2) format('woff2');
}

@font-face {
  font-family: "Open Sans";
  src: url(https://fonts.gstatic.com/s/opensans/v36/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVI.woff2) format('woff2');;
}

:root{
  --black: #242424;
  --medium-grey: #B7B7B7;
  --light-grey: #e8e8e8;
  --superlight-grey: #f8f8f8;
  --primary: #C99C99;

  --error-background: #f9e7f1;
	--error-text: #a82564;
	--error-border: #d01c71;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans";
  color: var(--black);
  background-color: var(--superlight-grey);
}

a {
  text-decoration: none;
  color: inherit;

  &:hover{
    cursor: pointer;
  }
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
