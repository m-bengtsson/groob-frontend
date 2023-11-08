import styled from "styled-components";

export const AuthPhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 92vh;
  gap: 0.5em;

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const StyledLoginSignupWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
    margin: 0.5em 0;
  }

  h1 {
    font-family: "Fat Inter";
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const StyledManagePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 20px;
  }

  h5 {
    margin: 10px;
  }

  .title-btn-container {
    display: flex;
    justify-content: space-between;
  }

  h5 {
    margin-top: 3em;
  }

  p,
  h4 {
    background: #ffffff;
  }
`;

export const StyledAdminPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
  }
  p,
  h4 {
    background: #ffffff;
  }
`;

export const StyledPartContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  .new-container {
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: ${(props) => (props.$long ? "62vh" : "30vh")};
    border: 1px solid var(--light-grey);
    border-right: none;
    background: #ffffff;
    text-align: center;
    padding: 2em 1em;
    justify-content: space-evenly;
  }
`;

export const StyledAddItemPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15em;
  height: 80vh;
`;

export const StyledErrorMessage = styled.div`
  border: 1px solid var(--error-text);
  background: var(--error-background);
  color: var(--error-text);
  max-width: 300px;
  font-size: 12px;
  font-family: "Fat Inter";
  padding: 0.5em 1em;
  margin-top: 5px;
`;
