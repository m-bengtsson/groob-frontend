import { StyledAddItemPage } from "../styles/Container.styled";
import axios from "axios";
import ItemForm from "../components/ItemForm";

const AddItemPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, itemsInStock } = e.target;

    const body = {
      title: title.value,
      description: description.value,
      repeatPassword: itemsInStock.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/items",
        body
      );
      console.log("response: ", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Add item</h2>
      <StyledAddItemPage>
        <ItemForm handleSubmit={handleSubmit} />
        <div>Item Overview</div>
      </StyledAddItemPage>
    </>
  );
};

export default AddItemPage;
