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

  h4 {
    background: var(--superlight-grey);
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
  width: 65vw;
  height: 100%;

  h2 {
    position: absolute;
    margin-top: 1.5em;
    z-index: 1;
  }
`;

export const StyledAddItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10%;
  width: 100%;
  height: 86vh;
  position: relative;

  .submit-item-button {
    position: absolute;
    bottom: 10px;
    right: 0;
    width: 10em;
    font-family: "Fat Inter";
  }

  .message {
    position: absolute;
    bottom: 0px;
  }
`;

export const StyledItemForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 60vh;
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
  height: 55vh;
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
    gap: 5%;
    width: 100%;
  }
`;

export const ItemDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  position: relative;
  gap: 15%;

  .large-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30vw;
    height: 85vh;
  }
  h3 {
    font-family: "Fat Inter";
    margin-bottom: 0.5em;
  }
  .image {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    width: 40vw;
    height: 85vh;
  }
  .item-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 5%;
    width: 100%;
  }
  .description-container {
    * {
      margin: 0.5em 0;
    }
  }
  .buy-button {
    width: 100%;
    letter-spacing: 1px;
  }
`;

export const StyledDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;

  select {
    height: 2.5em;
    padding: 0.5em;
    margin: 0.5em 0;
  }
  select:focus {
    outline: none;
  }
`;
export const ItemNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;

  && > * {
    margin-bottom: 1em;
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

export const StyledSuccessMessage = styled.div`
  border: 1px solid var(--success-text);
  background: var(--success-background);
  color: var(--success-text);
  max-width: 300px;
  font-size: 12px;
  font-family: "Fat Inter";
  padding: 0.5em 1em;
  margin-top: 5px;
`;
