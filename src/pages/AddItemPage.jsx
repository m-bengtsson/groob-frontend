import { StyledAddItemPage } from "../styles/Container.styled";
import instance from "../axiosconfig";
import ItemForm from "../components/ItemForm";
import { useState } from "react";

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
      const response = await instance.post("/items", body);
      // todo modal or text for successful
    } catch (error) {
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
    <>
      <h2>Add item</h2>
      <StyledAddItemPage>
        <ItemForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        <div>
          Item Overview
          <p>{formData.title}</p>
          <p>{formData.description}</p>
          <p>{formData.itemsInStock}</p>
        </div>
      </StyledAddItemPage>
    </>
  );
};

export default AddItemPage;
