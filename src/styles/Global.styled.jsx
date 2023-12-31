import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Akshar';
  src: url(https://fonts.gstatic.com/s/akshar/v9/Yq6I-LyHWTfz9rGoqDaUbHvhkAUsSXYF-9eS9g.woff2) format('woff2');
}

@font-face {
  font-family: "Inter";
  src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');
}

@font-face {
  font-family: "Fat Inter";
  src: url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2) format('woff2');
}

:root{
  --black: #242424;
  --medium-grey: #B7B7B7;
  --light-grey: #e8e8e8;
  --superlight-grey: #f8f8f8;
  --primary: #C99C99;

  --error-background: #efd5d3;
	--error-text: #793838;

  --success-background: #c9e1c4;
	--success-text: #516f46;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter";
  font-size: 12px;
  color: var(--black);
  background-color: var(--superlight-grey);
}
h1{
  font-size: 28px;
}
h2{
  font-size: 22px;
}
h3{
  font-size: 19px;
}
h4{
  font-size: 16px;
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
.bold{
  font-family: "Fat Inter";
}
textarea:focus, input:focus{
    outline: none;
}
.page-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  position: relative;
}
`;

export const View = styled.div`
  display: flex;
  align-items: center;
`;
