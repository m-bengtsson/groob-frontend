import {
  StyledAddItemPage,
  StyledItemPreview,
  StyledAddItemDiv,
} from "../styles/Container.styled";
import instance from "../axiosconfig";
import ItemForm from "../components/ItemForm";
import { useState } from "react";
import { LargeButton, SmallButton } from "../styles/Button.styled";

const AddItemPage = () => {
  const [formData, setFormData] = useState({
    title: null,
    description: null,
    itemsInStock: null,
  });

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
      // todo modal or text for successful
    } catch (error) {
      // todo: errorcontainer here
      console.log(error);
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
        </StyledAddItemDiv>
        <LargeButton
          className="submit-item-button"
          type="submit"
          form="item-form"
        >
          Add item
        </LargeButton>
      </StyledAddItemPage>
    </div>
  );
};

export default AddItemPage;
