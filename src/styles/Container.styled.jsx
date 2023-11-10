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
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 65vw;

  h2 {
    position: absolute;
    top: 30px;
  }

  .submit-item-button {
    position: absolute;
    width: 10em;
    bottom: 10px;
    right: 0px;
    font-family: "Fat Inter";
  }
`;

export const StyledAddItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15%;
  width: 100%;
  height: 90vh;
`;

export const StyledItemForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 68vh;
  width: 350px;

  textarea {
    background-color: var(--light-grey);
    border: none;
    width: 100%;
    padding: 0.5em 0.5em;
    font-size: 14px;
    font-weight: 700;
    box-shadow: inset 0 1px 2px #949494;
  }
  input {
    width: 100%;
  }
  label {
    width: 100%;
    margin-bottom: 1.5em;
  }
  p {
    font-family: "Fat Inter";
    margin-bottom: 0.5em;
  }
`;

export const StyledItemPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 58vh;
  width: 350px;

  h3 {
    font-family: "Fat Inter";
    font-size: 24px;
  }
  p {
    font-size: 14px;
  }
  .image {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    height: 30vh;
    width: 100%;
  }

  .item-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 2em;
    width: 100%;
  }
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
