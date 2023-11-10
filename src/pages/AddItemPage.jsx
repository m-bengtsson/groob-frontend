import { useState } from "react";
import instance from "../axiosconfig";
import ItemForm from "../components/ItemForm";
import SuccessMessage from "../components/SuccessMessage";
import ErrorMessage from "../components/ErrorMessage";
import { LargeButton, SmallButton } from "../styles/Button.styled";
import {
  StyledAddItemPage,
  StyledItemPreview,
  StyledAddItemDiv,
} from "../styles/Container.styled";

const AddItemPage = () => {
  const [formData, setFormData] = useState({
    title: null,
    description: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, itemsInStock } = e.target;

    const body = {
      title: title.value,
      description: description.value,
      numberOfItems: itemsInStock.value,
    };

    try {
      await instance.post("/items", body);
      setSuccessMessage("You added one item!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Something went wrong");
      setSuccessMessage("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="page-container">
      <StyledAddItemPage>
        <h2>Add item</h2>
        <StyledAddItemDiv>
          <ItemForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
          <StyledItemPreview>
            <div className="image">Upload Image</div>
            <h3>{formData.title}</h3>
            <p>{formData.description}</p>
            <p>{formData.itemsInStock}</p>
            <div className="item-buttons">
              <SmallButton>Remind me</SmallButton>
              <SmallButton>Buy</SmallButton>
            </div>
          </StyledItemPreview>
          <LargeButton
            className="submit-item-button"
            type="submit"
            form="item-form"
          >
            Add item
          </LargeButton>
        </StyledAddItemDiv>
        {successMessage && <SuccessMessage message={successMessage} />}
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </StyledAddItemPage>
    </div>
  );
};

export default AddItemPage;
